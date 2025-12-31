export const mainReactComponent = (title: string, content: string) => {
	return (
		<div>
			<h2 className='text-2xl'>{title}</h2>
			<div className='text-lime-500'>{content}</div>
		</div>
	);
};
