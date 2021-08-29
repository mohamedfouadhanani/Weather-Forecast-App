let FAQItem = ({ title, content }) => {
	return (
		<div>
			<span className="block font-bold">{title}</span>
			<span className="block text-justify">{content}</span>
		</div>
	);
};

export default FAQItem;
