import mustache from 'mustache';
import template from '!!raw-loader!../includes/Skins/footer.mustache';
import Logo from '!!raw-loader!../includes/Skins/Logo.mustache';
import footerItemList from '!!raw-loader!../includes/Skins/footerItemList.mustache';
import { lastModifiedBar, lastModifiedBarActive } from './lastModifiedBar.stories';
import { placeholder } from './utils';

export default {
	title: 'Footer'
};

const FOOTER_TEMPLATE_DATA = {
	'msg-mobile-frontend-footer-sitename': 'Site title OR Logo',
	'html-minerva-license': 'Content is available under <a rel="nofollow" href="#">Reading Web 3.0 License</a> unless otherwise noted.',
	'html-after-content': placeholder( 'Extensions can add here e.g. Related Articles.' ),
	'data-places': [
		{
			id: 'places',
			'array-items': [
				{
					id: 'terms-use',
					html: '<a href="#">Terms of Use</a>'
				},
				{
					id: 'privacy',
					html: '<a href="#">Privacy</a>'
				},
				{
					id: 'desktop-toggle',
					html: '<a href="#">Desktop</a>'
				}
			]
		}
	]
};

export const footer = () =>
	mustache.render( template, {
		'data-footer': Object.assign( FOOTER_TEMPLATE_DATA, {
			'html-minerva-lastmodified': lastModifiedBar()
		} )
	} );

export const footerRecentEdit = () =>
	mustache.render( template, {
		'data-footer': Object.assign( FOOTER_TEMPLATE_DATA, {
			'html-minerva-lastmodified': lastModifiedBarActive()
		} )
	}, {
		footerItemList,
		Logo
	} );
