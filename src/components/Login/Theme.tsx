/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createStyles } from '@mantine/core'

// Primary Palette
export const colorBlack = '#000000'
export const colorDarkerGrey = '#222222'
export const colorDarkGrey = '#444444'
export const colorGrey = '#E1E1E1'
export const colorLightGrey = '#F2F2F2'
export const colorLightestGrey = '#FAFAFA'
export const colorWhite = '#FFFFFF'
export const colorBlue = '#9ED3FD'
export const colorLightBlue = '#f3faff'
export const colorDarkBlue = '#6895f7'
export const colorYellow = '#F9FF15'

// Utility colors
export const colorGreen = '#1DAD4E'
export const colorVerified = 'rgba(62, 162, 255, 1)'
export const colorSiteDarkModeBg = '#1A1C1E'

export const useTheme = createStyles(theme => ({
	// Buttons
	buttonBlack: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorBlack,
		'&:hover': {
			backgroundColor: colorDarkGrey
		},
		borderRadius: 24
	},
	buttonGrey: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey,
		'&:hover': {
			backgroundColor: colorLightGrey
		},
		color: theme.colorScheme === 'dark' ? colorWhite : colorBlack,
		borderRadius: 24
	},
	buttonDarkGrey: {
		backgroundColor: colorDarkGrey,
		'&:hover': {
			backgroundColor: colorDarkerGrey
		},
		color: colorWhite,
		borderRadius: 24
	},
	buttonBlue: {
		color: colorBlack,
		backgroundColor: colorBlue,
		'&:hover': {
			backgroundColor: colorDarkBlue
		},
		borderRadius: 24
	},
	buttonWhite: {
		borderRadius: 24,
		color: colorBlack,
		borderColor: colorBlack,
		backgroundColor: colorWhite,
		'&:hover': {
			backgroundColor: colorLightGrey
		}
	},

	// Form Fields
	fRadio: { fontWeight: 600, fontFamily: 'Inter' },
	fTextField: {
		border: '0px',
		height: 60,
		backgroundColor: theme.colorScheme === 'dark' ? '' : colorLightestGrey
	},
	fBlueSelectableSpan: {
		padding: 4,
		borderRadius: 8,
		fontWeight: 'bold',
		backgroundColor:
			theme.colorScheme === 'dark'
				? 'rgba(255, 102, 81, 0.3)'
				: colorLightBlue,
		color: colorDarkBlue,
		cursor: 'pointer'
	},
	fRichTextEditorContainer: {
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`,
		lineHeight: 1.4,
		borderRadius: 16
	},
	fRichTextEditorToolbar: {
		border: 'none',
		borderRadius: 24,
		marginBottom: 10
	},

	// Layout
	clickable: {
		cursor: 'pointer'
	},
	centered: {
		alignItems: 'center',
		textAlign: 'center'
	},
	centeredRow: {
		display: 'flex',
		alignItems: 'center'
	},
	centeredRowClickable: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer'
	},
	fullWidth: {
		width: '100%'
	},
	row: {
		display: 'flex'
	},
	rowEndAlign: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'end'
	},
	// A row which turns into a column when display is narrow enough
	rowResponsive: {
		display: 'flex',
		flexDirection: 'row',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			flexDirection: 'column'
		}
	},
	spacedRowCentered: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	spacedRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	invisibleContainer: { display: 'none' },
	visibleContainer: { display: 'block' },
	visibleDesktopOnly: {
		display: 'block',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none'
		}
	},
	visibleMobileOnly: {
		display: 'none',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'block'
		}
	},

	// Grids and items
	boxBorderedRounded: {
		border: `1px solid ${colorGrey}`,
		padding: 16,
		borderRadius: 16
	},
	gridItem: {
		fontSize: 16,
		fontWeight: 600,
		cursor: 'pointer',
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`,
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightestGrey,
		borderRadius: 16,
		padding: 16
	},
	gridItemCentered: {
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`,
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightestGrey,
		fontWeight: 600,
		borderRadius: 16,
		padding: 16,
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center'
	},
	greyContentBox: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightGrey,
		borderRadius: 16,
		padding: 16
	},
	connectMethodGridItem: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightestGrey,
		width: 150,
		height: 100,
		borderRadius: 16,
		boxShadow:
			theme.colorScheme === 'dark'
				? ''
				: '5px 5px 30px rgba(0, 0, 0, 0.1)',
		cursor: 'pointer',
		position: 'relative'
	},
	connectMethodGridItemMobile: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightestGrey,
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 32,
		padding: 8,
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`,
		cursor: 'pointer',
		alignItems: 'center'
	},
	connectMethodGridItemContent: {
		paddingTop: 20,
		alignItems: 'center',
		textAlign: 'center'
	},
	extensionGridItem: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'start',
		fontWeight: 600,
		minHeight: 110,
		marginBottom: 12,
		cursor: 'pointer',
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`,
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightestGrey,
		borderRadius: 16,
		padding: 16
	},
	extensionGridItemEnabled: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: 12,
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`,
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightestGrey,
		borderRadius: 16,
		paddingTop: 16,
		position: 'relative'
	},
	extensionGridItemEnabledHeaderBackground: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorWhite,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 48,
		borderTopLeftRadius: 16,
		borderTopRightRadius: 16
	},
	extensionGridItemActions: {
		display: 'flex',
		flexDirection: 'row',
		height: 46
	},
	extensionGridItemAction: {
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'row',
		padding: 12
	},
	extensionGridItemHeader: {
		fontWeight: 600,
		display: 'flex',
		alignItems: 'center',
		zIndex: 1
	},

	// Page Header
	pageHeader: {
		marginBottom: 32,
		display: 'flex',
		backgroundColor:
			theme.colorScheme === 'dark' ? colorBlack : colorLightestGrey,
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		paddingTop: 32,
		borderBottomColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey,
		borderBottomWidth: '1px',
		borderBottomStyle: 'solid',
		paddingBottom: 32,
		paddingLeft: 32,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginBottom: 32,
			paddingBottom: 16,
			paddingLeft: 16,
			paddingTop: 16
		}
	},
	pageHeaderTitleContainer: {
		marginLeft: 32,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginLeft: 16
		}
	},
	pageHeaderExitButton: {
		marginRight: 32,
		marginLeft: 'auto',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none'
		},
		cursor: 'pointer'
	},

	// Page Footer
	pageFooterContainer: {
		position: 'fixed',
		zIndex: 5,
		bottom: 0,
		left: 0,
		right: 0
	},
	pageFooterBackground: {
		backgroundColor: theme.colorScheme === 'dark' ? colorBlack : colorWhite,
		width: '100%',
		height: 48,
		paddingTop: 8
	},
	pageZeroPaddingMobileContainer: {
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			padding: 0
		}
	},

	// Modal
	modalHeader: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 16,
		paddingRight: 16,
		position: 'relative'
	},
	modalStepsContainer: {
		border: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorLightGrey
		}`,
		borderRadius: 16,
		padding: 16
	},

	// Agreements Home Columns Layout
	pageResponsiveContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: 64,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			flexDirection: 'column',
			marginTop: 0
		}
	},
	pageLeftColumn: {
		width: 350,
		paddingRight: 32,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			width: '100%',
			paddingRight: 0
		}
	},
	pageRightColumn: {
		width: 650,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			width: '100%'
		}
	},

	// Page Panel Layout
	pagePanelLayoutContainer: {
		display: 'flex',
		width: '100%',
		[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
			flexDirection: 'column'
		}
	},

	pagePanelLayoutContent: {
		marginLeft: 32,
		marginRight: 32,
		width: '100%',
		maxWidth: 1000,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingTop: 8,
			width: '85%'
		}
	},
	pagePanelLayoutNavBar: {
		minWidth: 288,
		[`@media (min-width: ${theme.breakpoints.md}px)`]: {
			paddingLeft: 32
		},
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			paddingTop: 24
		}
	},
	pagePanelLayoutNavItem: { borderRadius: 8 },

	// Site header bar
	siteHeader: {
		backgroundColor: theme.colorScheme === 'dark' ? colorBlack : colorWhite,
		borderBottom: `1px solid ${
			theme.colorScheme === 'dark' ? colorDarkGrey : colorGrey
		}`
	},
	siteHeaderLeftItems: {
		marginLeft: 16,
		paddingTop: 2,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
	},

	siteHeaderRightItems: {
		paddingTop: 10,
		marginBottom: 4,
		marginRight: 0,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginRight: 20
		}
	},
	siteHeaderMainLogo: {
		fontSize: 32,
		marginLeft: 16,
		marginRight: 8,
		paddingBottom: 6,
		color: theme.colorScheme === 'dark' ? colorWhite : colorBlack,
		cursor: 'pointer'
	},
	siteHeaderInner: {
		height: 56,
		marginTop: '-4px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	siteHeaderUser: {
		marginBottom: '5px',
		color: theme.colorScheme === 'dark' ? colorLightGrey : colorBlack,
		padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
		borderRadius: theme.radius.sm,
		transition: 'background-color 100ms ease'
	},
	siteHeaderUserActive: {
		backgroundColor:
			theme.colorScheme === 'dark' ? colorDarkGrey : colorWhite
	},
	siteHeaderMenuEllipse: {
		[theme.fn.smallerThan('md')]: {
			marginLeft: 0,
			marginRight: 0
		},
		marginRight: 24,
		marginLeft: 24
	},

	// Widgets
	widgetDark: {
		backgroundColor: colorBlack,
		color: 'white',
		position: 'relative',
		padding: 24,
		width: '100%',
		borderRadius: 16,
		boxShadow:
			theme.colorScheme === 'dark'
				? ''
				: '0px 4px 30px rgba(0, 0, 0, 0.1)',
		marginBottom: 48,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			borderRadius: 0,
			boxShadow: '',
			marginBottom: 0
		}
	},
	widgetLight: {
		boxShadow:
			theme.colorScheme === 'dark'
				? ''
				: '5px 5px 30px rgba(0, 0, 0, 0.1)',
		borderRadius: 16,
		width: '100%',
		backgroundColor: theme.colorScheme === 'dark' ? colorBlack : colorWhite,
		padding: 24,
		marginBottom: 48,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			borderRadius: 0,
			boxShadow: 'none',
			marginBottom: 0,
			borderBottom: `8px solid ${
				theme.colorScheme === 'dark' ? colorDarkerGrey : colorLightGrey
			}`
		}
	},
	widgetMeem: {
		boxShadow:
			theme.colorScheme === 'dark'
				? ''
				: '5px 5px 30px rgba(0, 0, 0, 0.1)',
		borderRadius: 16,
		width: '100%',
		background:
			'linear-gradient(117deg, rgba(227,255,191,1) 0%, rgba(229,255,183,0.8477984943977591) 3%, rgba(247,254,113,0.8534007352941176) 31%, rgba(177,220,255,0.8505996148459384) 66%, rgba(133,139,33,0.4724483543417367) 100%)',
		padding: 24,
		marginBottom: 48,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			borderRadius: 0,
			boxShadow: 'none',
			marginBottom: 0,
			borderBottom: `8px solid ${
				theme.colorScheme === 'dark' ? colorDarkerGrey : colorLightGrey
			}`
		}
	},

	// Images
	copyIcon: {
		marginLeft: 4,
		cursor: 'pointer'
	},
	emojiCanvas: {
		position: 'absolute',
		top: 40,
		left: 0,
		marginTop: -12,
		marginBottom: -12,
		lineHeight: 1,
		fontSize: 24,
		zIndex: -1000
	},
	emojiCanvasCover: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 256,
		height: 256,
		marginTop: -12,
		marginBottom: -12,
		backgroundColor:
			theme.colorScheme === 'dark' ? colorSiteDarkModeBg : colorWhite,
		zIndex: -1
	},
	imageAgreementLogo: {
		imageRendering: 'pixelated',
		width: 80,
		height: 80,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			width: 40,
			height: 40,
			minHeight: 40,
			minWidth: 40
		}
	},
	imageAgreementLogoContainer: {
		marginTop: 32,
		width: 108,
		height: 100,
		position: 'relative'
	},
	imageAgreementLogoDeleteButton: {
		position: 'absolute',
		top: '-12px',
		right: '-105px',
		cursor: 'pointer'
	},
	imagePixelated: {
		imageRendering: 'pixelated'
	},

	// Misc
	backArrow: {
		cursor: 'pointer',
		paddingTop: 4,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			display: 'none'
		}
	},
	badge: {
		paddingLeft: 8,
		paddingRight: 8
	},
	iconDarkThemeToggle: {
		marginTop: -4,
		[`@media (max-width: ${theme.breakpoints.md}px)`]: {
			marginRight: 20
		}
	},
	paragraphIntTextInput: {
		paddingLeft: 142
	},

	// Text styles
	tExtraExtraLarge: { fontWeight: 600, fontSize: '32px', lineHeight: 1.4 },
	tExtraLarge: { fontWeight: 600, fontSize: '28px', lineHeight: 1.4 },
	tLargeBold: { fontWeight: 600, fontSize: '22px', lineHeight: 1.4 },
	tLarge: { fontSize: '22px', lineHeight: 1.4 },
	tMediumBold: { fontWeight: 600, fontSize: '18px', lineHeight: 1.4 },
	tMediumBoldFaded: {
		fontSize: 18,
		fontWeight: 600,
		lineHeight: 1.4,
		opacity: 0.6
	},
	tMediumButton: { fontWeight: 500, fontSize: '18px', lineHeight: 1.4 },
	tMediumFaded: { fontWeight: 400, fontSize: '18px', lineHeight: 1.4 },
	tMedium: { fontWeight: 400, fontSize: '18px', lineHeight: 1.4 },
	tSmallBold: { fontWeight: 600, fontSize: '16px', lineHeight: 1.4 },
	tSmallBoldFaded: {
		fontWeight: 600,
		fontSize: '16px',
		lineHeight: 1.4,
		opacity: 0.6
	},
	tSmallFaded: {
		fontSize: '16px',
		opacity: 0.6
	},
	tSmall: { fontWeight: 500, fontSize: '16px', lineHeight: 1.4 },
	tSmallLabel: {
		fontWeight: 600,
		fontSize: '16px',
		lineHeight: 1.4,
		letterSpacing: '0.05em',
		textTransform: 'uppercase'
	},
	tExtraSmallBold: {
		fontSize: '14px',
		lineHeight: 1.4,
		fontWeight: 600
	},
	// Special case for badges
	tExtraSmallBoldBlack: {
		fontSize: '14px',
		lineHeight: 1.4,
		fontWeight: 600,
		color: colorBlack
	},
	tExtraSmallLabel: {
		fontSize: '14px',
		lineHeight: 1.4,
		fontWeight: 600,
		letterSpacing: 1.2,
		opacity: 0.6
	},
	tExtraSmallFaded: {
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: 1.4,
		opacity: 0.6
	},
	tExtraSmall: { fontWeight: 500, fontSize: '14px', lineHeight: 1.4 },
	tExtraExtraSmall: { fontWeight: 500, fontSize: '12px', lineHeight: 1.4 },

	// Text variants
	tBadgeText: {
		fontWeight: 600,
		fontSize: '12px',
		color: theme.colorScheme === 'dark' ? colorWhite : colorBlack
	},
	tBadgeTextSmall: {
		fontWeight: 600,
		fontSize: '10px',
		color: theme.colorScheme === 'dark' ? colorWhite : colorBlack
	},
	tBadgeTextWhite: { fontWeight: 600, fontSize: '12px', color: colorWhite },

	tLink: {
		textDecoration: 'underline',
		cursor: 'pointer',
		color: colorBlue,
		fontWeight: 600
	},

	tEllipsis: {
		textOverflow: 'ellipsis',
		msTextOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden'
	}
}))
