import Head from 'next/head';
import PrivacyTermsItem from '../components/PrivacyTermsItem';

let Terms = () => {
	return (
		<>
			<Head>
				<title>Weather Forecast App | Terms and Conditions</title>
			</Head>
			<div className="p-4 space-y-6 max-w-4xl mx-auto">
				<PrivacyTermsItem title="Terms">
					<p>
						By accessing the website at this domain, you are agreeing to be
						bound by these terms of service, all applicable laws and
						regulations, and agree that you are responsible for compliance with
						any applicable local laws. If you do not agree with any of these
						terms, you are prohibited from using or accessing this site. The
						materials contained in this website are protected by applicable
						copyright and trademark law.
					</p>
				</PrivacyTermsItem>

				<PrivacyTermsItem title="Disclaimer">
					<p>
						This is a personnal project intended only to enrich own portfolio
						and not for actual use. If you are looking for information about the
						weather, please use other services.
					</p>
				</PrivacyTermsItem>

				<PrivacyTermsItem title="Accuracy of materials">
					<p>
						This app is using a free data source meaning that the accuracy of
						the information within it may not be high.
					</p>
				</PrivacyTermsItem>

				<PrivacyTermsItem title="Modifications">
					<p>
						We may revise these terms of service for its website at any time
						without notice. By using this website you are agreeing to be bound
						by the then current version of these terms of service.
					</p>
				</PrivacyTermsItem>
			</div>
		</>
	);
};

export default Terms;
