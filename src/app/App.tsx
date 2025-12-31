import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { I18nTypedStoreProvider } from '@libs/i18n-typed-store/react';
import { store } from '../../locales/store';
import { Navigation } from '@/widgets/navigation';
import { useLocalStorage } from '@/shared/hooks/useLocalStorage';
import type { SuspenseMode } from '@/features/suspense-mode-switcher';
import { LOCALES } from '../../locales/constants';
import { LoadingSpinner } from '@/shared/ui/Loader';

// Lazy load pages
const MainPage = lazy(() => import('@/pages/main-page').then((module) => ({ default: module.MainPage })));
const NewsPage = lazy(() => import('@/pages/news-page').then((module) => ({ default: module.NewsPage })));
const SettingsPage = lazy(() => import('@/pages/settings-page').then((module) => ({ default: module.SettingsPage })));

const LOCALE_STORAGE_KEY = 'i18n-locale';
const SUSPENSE_MODE_STORAGE_KEY = 'i18n-suspense-mode';

function LoadingFallback() {
	return (
		<div className='container mx-auto p-6'>
			<div className='flex items-center justify-center min-h-[400px]'>
				<LoadingSpinner />
			</div>
		</div>
	);
}

function App() {
	const [suspenseMode, setSuspenseMode] = useLocalStorage<SuspenseMode>(SUSPENSE_MODE_STORAGE_KEY, 'first-load-locale');
	const [storedLocale] = useLocalStorage<keyof typeof LOCALES>(LOCALE_STORAGE_KEY, 'en');

	// Initialize locale from localStorage on mount
	useEffect(() => {
		if (storedLocale && storedLocale !== store.currentLocale) {
			store.changeLocale(storedLocale);
		}
	}, [storedLocale]);

	return (
		<BrowserRouter>
			<I18nTypedStoreProvider store={store} suspenseMode={suspenseMode}>
				<div className='min-h-screen bg-background'>
					<Navigation onSuspenseModeChange={setSuspenseMode} />
					<main className='py-6'>
						<Suspense fallback={<LoadingFallback />}>
							<Routes>
								<Route path='/' element={<MainPage />} />
								<Route path='/main' element={<MainPage />} />
								<Route path='/news' element={<NewsPage />} />
								<Route path='/settings' element={<SettingsPage />} />
								<Route path='*' element={<Navigate to='/' replace />} />
							</Routes>
						</Suspense>
					</main>
				</div>
			</I18nTypedStoreProvider>
		</BrowserRouter>
	);
}

export default App;
