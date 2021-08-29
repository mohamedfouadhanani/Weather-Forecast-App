let Layer = ({ children, customClassName }) => {
	return (
		<div className={`${customClassName || ''} absolute !z-[1000]`}>
			{children}
		</div>
	);
};

export default Layer;
