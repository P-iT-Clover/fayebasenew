;(this.webpackJsonpweb = this.webpackJsonpweb || []).push([
    [0],
    {
      125: function (G, L, p) {},
      197: function (G, L, p) {},
      734: function (x0, x1, x2) {
        'use strict'
        x2.r(x1)
        var x4 = x2(1),
          x5 = x2.n(x4),
          x6 = x2(35),
          x7 = x2.n(x6),
          x8 = (x2(197), x2(25)),
          x9 = x2(20),
          xx = x2(3),
          xb = (x2(125), x2(308)),
          xG = x2(818),
          xL = function () {
            return !window.invokeNative
          },
          xp = function () {},
          xq = function (Gp, Gq) {
            var Gy = Object(x4.useRef)(xp)
            Object(x4.useEffect)(
              function () {
                Gy.current = Gq
              },
              [Gq]
            )
            Object(x4.useEffect)(
              function () {
                var Gc = function (GU) {
                  var GQ = GU.data,
                    GJ = GQ.action,
                    Gr = GQ.data
                  Gy.current && GJ === Gp && Gy.current(Gr)
                }
                return (
                  window.addEventListener('message', Gc),
                  function () {
                    return window.removeEventListener('message', Gc)
                  }
                )
              },
              [Gp]
            )
          },
          xw = x2(139),
          xy = x2(42),
          xA = x2.n(xy)
        function xc(Gp, Gq) {
          return xU.apply(this, arguments)
        }
        function xU() {
          return (xU = Object(xw.a)(
            xA.a.mark(function Gq(Gw, Gy) {
              var Gc, GU, GQ, GJ
              return xA.a.wrap(function (Gr) {
                for (;;) {
                  switch ((Gr.prev = Gr.next)) {
                    case 0:
                      return (
                        (Gc = {
                          method: 'post',
                          headers: {
                            'Content-Type': 'application/json; charset=UTF-8',
                          },
                          body: JSON.stringify(Gy),
                        }),
                        (GU = window.GetParentResourceName
                          ? window.GetParentResourceName()
                          : 'nui-frame-app'),
                        (Gr.next = 4),
                        fetch('https://'.concat(GU, '/').concat(Gw), Gc)
                      )
                    case 4:
                      return (GQ = Gr.sent), (Gr.next = 7), GQ.json()
                    case 7:
                      return (GJ = Gr.sent), Gr.abrupt('return', GJ)
                    case 9:
                    case 'end':
                      return Gr.stop()
                  }
                }
              }, Gq)
            })
          )).apply(this, arguments)
        }
        var xQ = ['Escape'],
          xJ = function (Gp) {
            var Gw = Object(x4.useRef)(xp)
            Object(x4.useEffect)(
              function () {
                Gw.current = Gp
              },
              [Gp]
            )
            Object(x4.useEffect)(function () {
              var Gy = function (GA) {
                xQ.includes(GA.code) && (Gw.current(false), xc('hideFrame'))
              }
              return (
                window.addEventListener('keydown', Gy),
                function () {
                  return window.removeEventListener('keydown', Gy)
                }
              )
            }, [])
          },
          xr = x2(812),
          xF = x2(806),
          xT = x2(821),
          xR = x2(815),
          xa = x2(799),
          xS = x2(816),
          xX = x2(817),
          xf = x2(800),
          xo = x2(34),
          xd = x2(48),
          xz = x2(5),
          xE = Object(xz.b)({
            key: 'mdwPublicState',
            default: false,
          }),
          xM = Object(xz.b)({
            key: 'loadingModalState',
            default: false,
          }),
          xu = Object(xz.b)({
            key: 'assignLicenseModalState',
            default: false,
          }),
          xg = Object(xz.b)({
            key: 'createWarrantModalState',
            default: false,
          }),
          xZ =
            (Object(xz.b)({
              key: 'extendWarrantModalState',
              default: false,
            }),
            Object(xz.b)({
              key: 'hireOfficerModalState',
              default: false,
            })),
          xW = Object(xz.b)({
            key: 'licenseDataState',
            default: {},
          }),
          xP = Object(xz.b)({
            key: 'profileIdState',
            default: '',
          }),
          xV = Object(xz.b)({
            key: 'licenseTypeState',
            default: '',
          }),
          xH = Object(xz.b)({
            key: 'propertyDataState',
            default: [],
          }),
          xK = Object(xz.b)({
            key: 'filteredPropertyDataState',
            default: [],
          }),
          xI = Object(xz.b)({
            key: 'businessDataState',
            default: [],
          }),
          xn = Object(xz.b)({
            key: 'filteredBusinessDataState',
            default: [],
          }),
          xl = Object(xz.b)({
            key: 'employeeDataState',
            default: [],
          }),
          xm = Object(xz.b)({
            key: 'employeeCountState',
            default: 0,
          }),
          xh = Object(xz.b)({
            key: 'evidenceSearchDataState',
            default: [],
          }),
          xB = Object(xz.b)({
            key: 'filteredEvidenceSearchDataState',
            default: [],
          }),
          xN = Object(xz.b)({
            key: 'chargesDataState',
            default: [],
          }),
          xk = Object(xz.b)({
            key: 'warrantsDataState',
            default: [],
          }),
          xC = Object(xz.b)({
            key: 'filteredWarrantsDataState',
            default: [],
          }),
          xD = Object(xz.b)({
            key: 'staffDataState',
            default: [],
          }),
          xv = Object(xz.b)({
            key: 'filteredStaffDataState',
            default: [],
          }),
          xj = Object(xz.b)({
            key: 'mdwFirstNameState',
            default: '',
          }),
          xY = Object(xz.b)({
            key: 'mdwLastNameState',
            default: '',
          }),
          xi = Object(xz.b)({
            key: 'mdwRankState',
            default: '',
          }),
          xO = Object(xz.b)({
            key: 'mdwRankLabelState',
            default: '',
          }),
          xs = Object(xz.b)({
            key: 'mdwCallsignState',
            default: '',
          }),
          b0 = Object(xz.b)({
            key: 'incidentsSearchDataState',
            default: [],
          }),
          b1 = Object(xz.b)({
            key: 'filteredIncidentsSearchDataState',
            default: [],
          }),
          b2 = Object(xz.b)({
            key: 'incidentsEmsSearchDataState',
            default: [],
          }),
          b3 = Object(xz.b)({
            key: 'filteredIncidentsEmsSearchDataState',
            default: [],
          }),
          b4 = Object(xz.b)({
            key: 'incidentIdState',
            default: 0,
          }),
          b5 = Object(xz.b)({
            key: 'evidenceState',
            default: [],
          }),
          b6 = Object(xz.b)({
            key: 'officersInvolvedState',
            default: [],
          }),
          b7 = Object(xz.b)({
            key: 'emsInvolvedState',
            default: [],
          }),
          b8 = Object(xz.b)({
            key: 'personsInvolvedState',
            default: [],
          }),
          b9 = Object(xz.b)({
            key: 'criminalsState',
            default: [],
          }),
          bx = Object(xz.b)({
            key: 'curChargesState',
            default: [],
          }),
          bb = Object(xz.b)({
            key: 'officersState',
            default: [],
          }),
          bG = Object(xz.b)({
            key: 'filteredOfficersState',
            default: [],
          }),
          bL = Object(xz.b)({
            key: 'emsState',
            default: [],
          }),
          bp = Object(xz.b)({
            key: 'filteredEmsState',
            default: [],
          }),
          bq = Object(xz.b)({
            key: 'assignLoadingState',
            default: false,
          }),
          bw = Object(xz.b)({
            key: 'assignEvidenceState',
            default: false,
          }),
          by = Object(xz.b)({
            key: 'assignOfficerState',
            default: false,
          }),
          bA = Object(xz.b)({
            key: 'assignEmsState',
            default: false,
          }),
          bc = Object(xz.b)({
            key: 'assignPersonState',
            default: false,
          }),
          bU = Object(xz.b)({
            key: 'addCriminalState',
            default: false,
          }),
          bQ = Object(xz.b)({
            key: 'addChargeState',
            default: false,
          }),
          bJ = Object(xz.b)({
            key: 'chargeCIDState',
            default: '',
          }),
          br = Object(xz.b)({
            key: 'curJobState',
            default: '',
          }),
          bF = x2(819),
          bT = x2(805),
          bR = Object(bT.a)({
            root: {
              top: '0px',
              left: '0px',
              width: '100vw',
              height: '100vh',
              position: 'absolute',
              maxWidth: '100vw',
              minWidth: '100vw',
              maxHeight: '100vh',
              minHeight: '100vh',
              border: '0px',
              margin: '0px',
              outline: '0px',
              padding: '0px',
              overflow: 'hidden',
              '& .MuiInput-root': {
                color: 'white',
                fontSize: '1.3vmin',
              },
              '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                borderColor: 'darkgray',
              },
              '& .MuiInput-underline:before': {
                borderColor: 'darkgray',
                color: 'darkgray',
              },
              '& .MuiInput-underline:after': {
                borderColor: 'white',
                color: 'darkgray',
              },
              '& .MuiInputLabel-animated': {
                color: 'darkgray',
                fontSize: '1.5vmin',
              },
              '& .MuiInputAdornment-root': { color: 'darkgray' },
              '& label.Mui-focused': { color: 'darkgray' },
            },
            input: {
              '& input[type=number]': { '-moz-appearance': 'textfield' },
              '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
              '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
              },
            },
            checkbox: {
              '&:hover': { backgroundColor: 'transparent !important' },
            },
            mdwOuterContainer: {
              width: '100vw',
              height: '100vh',
              display: 'flex',
              zIndex: 100,
              transition: 'visibility 400ms ease-out 0s',
              visibility: 'visible',
              alignItems: 'center',
              justifyContent: 'center',
            },
            mdwHeader: {
              width: '100%',
              height: '17.5%',
              display: 'flex',
              position: 'relative',
              borderBottom: '2px solid rgb(228, 63, 90)',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwHeaderText: {
              top: '0px',
              right: '0px',
              height: '100%',
              display: 'flex',
              padding: '8px',
              position: 'absolute',
              alignItems: 'flex-end',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            },
            mdwHeaderFlex: { flex: '1 1 0%' },
            mdwOuterBody: {
              width: '100%',
              height: '82.5%',
              display: 'flex',
              position: 'relative',
            },
            mdwInnerBody: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              position: 'absolute',
            },
            mdwTabsOuterContainer: {
              width: '10%',
              height: '100%',
            },
            mdwTabsInnerContainer: {
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwTabsFlexContainer: { flrx: '1 1 0%' },
            mdwInnerContainer: {
              width: '98vw',
              height: '96vh',
              display: 'flex',
              opacity: '1',
              position: 'absolute',
              transition: 'top 400ms ease-out 0s',
              flexDirection: 'column',
              backgroundColor: 'rgb(48, 71, 94)',
            },
            mdwInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwDashboardInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDashboardInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwDashboardInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDashboardInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwDashboardInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwProfilesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwProfilesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwProfilesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwProfilesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwProfilesInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwProfilesInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwProfilesInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwProfilesInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwProfilesInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwCreateImage: { marginRight: '8px' },
            mdwProfilesContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwProfilesLicensesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesTagsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesVehiclesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesHousingContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesHotelsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesStorageContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesEmploymentContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesPriorsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwBusinessesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwBusinessesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwBusinessesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwBusinessesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwBusinessesInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwBusinessesInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwChargesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwChargesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwChargesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwChargesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwChargesInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwChargesInnerContentRightHeaader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwIncidentsInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwIncidentsInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwIncidentsContentWrapperMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwIncidentsTextContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
              paddingBottom: '1.5%',
            },
            mdwIncidentsAddCriminalContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsEvidenceContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsOfficersInvolvedContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsPersonsInvolvedContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsTagsContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsVehiclesContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsCriminalContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwEvidenceOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwEvidenceInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwEvidenceInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwEvidenceInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwEvidenceInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwEvidenceInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwEvidenceInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwEvidenceInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwEvidenceInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwEvidenceContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwEvidenceTagsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwAssignOfficerModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignOfficerModalInnerContainer: {
              width: 'calc(50% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '35%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwAssignOfficerChipWrapper: {
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwAssignEmsModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignEmsModalInnerContainer: {
              width: 'calc(50% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '35%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwAssignEmsChipWrapper: {
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwAssignPersonModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignPersonModalInnerContainer: {
              width: 'calc(50% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '35%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwAssignEvidenceModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignEvidenceModalInnerContainer: {
              width: 'calc(23% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '53%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwAssignLicenseModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignLicenseModalInnerContainer: {
              width: 'calc(23% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '22%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwAddCriminalModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAddCriminalModalInnerContainer: {
              width: 'calc(50% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '35%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwAddChargeModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAddChargeModalInnerContainer: {
              width: 'calc(74% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '74%',
              minHeight: '74%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwCreateWarrantModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwCreateWarrantModalInnerContainer: {
              width: 'calc(23% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '22%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
            mdwHireOfficerModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwHireOfficerModalInnerContainer: {
              width: 'calc(23% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '22%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
          }),
          ba = Object(bT.a)({
            mdwLoadingModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwLoadingModalInnerContainer: {
              width: 'calc(30% - 64px)',
              height: 'auto',
              display: 'flex',
              padding: '16px',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '25%',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(34, 40, 49)',
            },
          }),
          bS = x2(0),
          bX = function (Gp) {
            var Gq = ba()
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsx)('div', {
                className: Gq.mdwLoadingModalContainer,
                style: { display: Gp.show ? '' : 'none' },
                children: Object(bS.jsx)('div', {
                  className: Gq.mdwLoadingModalInnerContainer,
                  children: Object(bS.jsx)('div', {
                    className: 'spinner-wrapper',
                    children: Object(bS.jsxs)('div', {
                      className: 'lds-spinner',
                      children: [
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                        Object(bS.jsx)('div', {}),
                      ],
                    }),
                  }),
                }),
              }),
            })
          },
          bf = {
            Select: function (Gp) {
              return Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsx)(xr.a, {
                  fullWidth: true,
                  sx: { width: '100%' },
                  children: Object(bS.jsx)(xF.a, {
                    id: 'outlined-select-currency',
                    variant: 'standard',
                    select: true,
                    label: Gp.label,
                    value: Gp.value,
                    onChange: function (Gw) {
                      return Gp.onChange(Gw.target.value)
                    },
                    sx: {
                      '& .MuiInput-root': { color: 'white !important' },
                      '& label.Mui-focused': { color: 'darkgray !important' },
                      '& Mui-focused': { color: 'darkgray !important' },
                      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                        borderColor: 'darkgray !important',
                      },
                      '& .MuiInput-underline:before': {
                        borderColor: 'darkgray !important',
                        color: 'darkgray !important',
                      },
                      '& .MuiInput-underline:after': {
                        borderColor: 'white !important',
                        color: 'darkgray !important',
                      },
                      '& .Mui-focused:after': { color: 'darkgray !important' },
                      '& .MuiInputAdornment-root': {
                        color: 'darkgray !important',
                      },
                    },
                    children:
                      Gp.items && Gp.items.length > 0
                        ? Gp.items.map(function (Gw) {
                            return Object(bS.jsx)(
                              xR.a,
                              {
                                value: Gw.id,
                                children: Gw.name,
                              },
                              Gw.id
                            )
                          })
                        : Object(bS.jsx)(bS.Fragment, {}),
                  }),
                }),
              })
            },
          },
          bo = Object(bT.a)({
            mdwAssignLicenseModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignLicenseModalInnerContainer: {
              width: 'calc(23% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '22%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
          }),
          bd = function (Gp) {
            var Gw = bo(),
              Gy = Object(xz.c)(xV),
              GA = Object(xx.a)(Gy, 2),
              Gc = GA[0],
              GU = GA[1]
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsx)('div', {
                className: Gw.mdwAssignLicenseModalContainer,
                style: { display: Gp.show ? '' : 'none' },
                children: Object(bS.jsx)('div', {
                  className: Gw.mdwAssignLicenseModalInnerContainer,
                  children: Object(bS.jsxs)('div', {
                    className: 'mdw-details',
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      alignContent: 'space-between',
                      position: 'relative',
                      justifyContent: 'space-between',
                      flex: '1 1',
                      overflow: 'hidden',
                    },
                    children: [
                      Object(bS.jsxs)('div', {
                        className: 'mdw-desc',
                        children: [
                          Object(bS.jsx)('div', {
                            className: 'flex-row',
                            style: {
                              display: 'flex',
                              alignItems: 'center',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              padding: '15px',
                            },
                            children: Object(bS.jsx)(bF.a, {
                              style: {
                                color: '#fff',
                                wordBreak: 'break-word',
                              },
                              variant: 'body1',
                              gutterBottom: true,
                              children: 'Assign License',
                            }),
                          }),
                          Object(bS.jsx)('div', {
                            className: 'flex-row',
                            style: {
                              display: 'flex',
                              alignItems: 'center',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              padding: '8px',
                              paddingBottom: '0px',
                            },
                            children: Object(bS.jsx)('div', {
                              className: 'input-wrapper',
                              style: {
                                width: '96%',
                                marginBottom: '5%',
                              },
                              children: Object(bS.jsx)(bf.Select, {
                                label: 'Licenses',
                                value: Gc,
                                onChange: function (GQ) {
                                  GU(GQ)
                                },
                                items: [
                                  {
                                    id: 'Drivers',
                                    name: 'Driver License',
                                  },
                                  {
                                    id: 'Weapon',
                                    name: 'Weapon License',
                                  },
                                  {
                                    id: 'Fishing',
                                    name: 'Fishing License',
                                  },
                                  {
                                    id: 'Hunting',
                                    name: 'Hunting License',
                                  },
                                  {
                                    id: 'Pilot',
                                    name: 'Pilot License',
                                  },
                                  {
                                    id: 'Business',
                                    name: 'Business License',
                                  },
                                  {
                                    id: 'Bar',
                                    name: 'Bar License',
                                  },
                                ],
                              }),
                            }),
                          }),
                          Object(bS.jsx)('div', {
                            className: 'flex-row',
                            style: {
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-start',
                              alignItems: 'flex-start',
                              paddingLeft: '15px',
                            },
                            children: Object(bS.jsx)('div', {
                              children: Object(bS.jsx)(xS.a, {
                                onClick: Gp.confirm,
                                size: 'small',
                                color: 'success',
                                variant: 'contained',
                                children: 'Save',
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: 'mdw-alignbottom',
                        style: {
                          display: 'flex',
                          justifyContent: 'flex-end',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '8px',
                          marginTop: '1%',
                        },
                        children: Object(bS.jsx)('div', {
                          children: Object(bS.jsx)(xS.a, {
                            onClick: Gp.close,
                            size: 'small',
                            color: 'warning',
                            variant: 'contained',
                            children: 'Close',
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          },
          bz = x2(813),
          bE = x2(309),
          bM = x2(798),
          bu = Object(bT.a)({
            mdwDashboardOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwDashboardInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwDashboardInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDashboardInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwInnerContainer: {
              width: '98vw',
              height: '96vh',
              display: 'flex',
              opacity: '1',
              position: 'absolute',
              transition: 'top 400ms ease-out 0s',
              flexDirection: 'column',
              backgroundColor: 'rgb(48, 71, 94)',
            },
            mdwInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwDashboardInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDashboardInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwDashboardInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwDashboardInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwDashboardInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDashboardInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwDashboardInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwDasboardInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
          }),
          bg = x2(53),
          bZ = x2.n(bg),
          bW = function () {
            var Gq = bu(),
              Gw = Object(xz.c)(xk),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(xz.c)(xC),
              GQ = Object(xx.a)(GU, 2),
              GJ = GQ[0],
              Gr = GQ[1],
              GF = Object(x4.useState)(''),
              GT = Object(xx.a)(GF, 2),
              GR = GT[0],
              Ga = GT[1],
              GS = x5.a.useState(null),
              GX = Object(xx.a)(GS, 2),
              Gf = GX[0],
              Go = GX[1],
              Gd = Boolean(Gf),
              Gz = Object(xz.c)(xg),
              GE = Object(xx.a)(Gz, 2),
              GM = (GE[0], GE[1]),
              Gu = Object(xz.c)(xM),
              Gg = Object(xx.a)(Gu, 2),
              GZ = (Gg[0], Gg[1])
            Object(x4.useEffect)(function () {
              xL() ||
                xc('np-mdw:fetchWarrants', {}).then(function (GV) {
                  Gc(GV.data)
                  Gr(GV.data)
                })
            }, [])
            var GW = function () {
              Go(null)
              Ga('')
              GM(true)
            }
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsx)('div', {
                className: Gq.mdwDashboardOuterContent,
                children: Object(bS.jsxs)('div', {
                  className: Gq.mdwDashboardInnerContent,
                  children: [
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwDashboardInnerContentLeft,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwDashboardInnerContentLeftHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-dashboard-inner-content-left-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'Warrants',
                              }),
                            }),
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwInnerContentLeftHeaderTextRight,
                              children: [
                                Object(bS.jsx)('div', {
                                  style: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                  },
                                  children: Object(bS.jsx)(bz.a, {
                                    title: 'Create Warrant',
                                    placement: 'top',
                                    sx: {
                                      backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                    },
                                    arrow: true,
                                    children: Object(bS.jsx)('i', {
                                      onClick: GW,
                                      className: 'fas fa-plus fa-w-14',
                                      style: { color: '#fff' },
                                    }),
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (GP) {
                                        return (function (GH) {
                                          if ('' !== GH) {
                                            var GK = GA.filter(function (GI) {
                                              return (
                                                GI.id
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GH.toLowerCase()) ||
                                                GI.name
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(
                                                    GH.toString().toLowerCase()
                                                  ) ||
                                                GI.incident
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(
                                                    GH.toString().toLowerCase()
                                                  )
                                              )
                                            })
                                            Gr(GK)
                                          } else {
                                            Gr(GA)
                                          }
                                        })(GP.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwInnerContentLeftBody,
                          children: [
                            Object(bS.jsxs)(bE.a, {
                              id: 'fade-menu',
                              MenuListProps: { 'aria-labelledby': 'fade-button' },
                              anchorEl: Gf,
                              open: Gd,
                              onClose: function () {
                                Go(null)
                                Ga('')
                              },
                              children: [
                                Object(bS.jsxs)(xR.a, {
                                  onClick: function () {
                                    return GW()
                                  },
                                  children: [
                                    Object(bS.jsx)(bM.a, {
                                      children: Object(bS.jsx)('i', {
                                        className: 'fas fa-plus',
                                      }),
                                    }),
                                    Object(bS.jsx)(bF.a, {
                                      variant: 'inherit',
                                      style: { color: '#fff' },
                                      children: 'Create Warrant',
                                    }),
                                  ],
                                }),
                                Object(bS.jsxs)(xR.a, {
                                  onClick: function () {
                                    return (
                                      Go(null),
                                      Ga(''),
                                      GZ(true),
                                      void xc('np-mdw:deleteWarrant', {
                                        id: GR,
                                      }).then(function (GP) {
                                        GZ(false)
                                        Gc(GP.data)
                                        Gr(GP.data)
                                      })
                                    )
                                  },
                                  children: [
                                    Object(bS.jsx)(bM.a, {
                                      children: Object(bS.jsx)('i', {
                                        className: 'fas fa-times',
                                      }),
                                    }),
                                    Object(bS.jsx)(bF.a, {
                                      variant: 'inherit',
                                      style: { color: '#fff' },
                                      children: 'Delete Warrant',
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            GJ && GJ.length > 0
                              ? GJ.map(function (GP) {
                                  return Object(bS.jsx)('div', {
                                    className: 'component-paper cursor-pointer',
                                    style: {
                                      width: '100%',
                                      borderBottom: '0px solid #fff',
                                      borderRadius: '0px',
                                      backgroundColor: '#222831',
                                    },
                                    onClick: function (GV) {
                                      return (
                                        (GH = GV),
                                        (GK = GP.id),
                                        Go(GH.currentTarget),
                                        void Ga(GK)
                                      )
                                      var GH, GK
                                    },
                                    children: Object(bS.jsxs)('div', {
                                      className: 'main-container',
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className: 'image',
                                          children: Object(bS.jsx)('img', {
                                            alt: '',
                                            src: GP.image,
                                            style: {
                                              height: '150px',
                                              maxHeight: '150px',
                                              minHeight: '150px',
                                            },
                                          }),
                                        }),
                                        Object(bS.jsxs)('div', {
                                          className: 'details',
                                          children: [
                                            Object(bS.jsxs)('div', {
                                              className: 'description',
                                              children: [
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsx)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body1',
                                                    gutterBottom: true,
                                                    children: GP.name,
                                                  }),
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsx)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: GP.incident,
                                                  }),
                                                }),
                                              ],
                                            }),
                                            Object(bS.jsx)('div', {
                                              className: 'align-bottom',
                                              style: {
                                                display: 'flex',
                                                justifyContent: 'flex-end',
                                                flexDirection: 'column',
                                              },
                                              children: Object(bS.jsxs)('div', {
                                                className: 'flex-row',
                                                style: {
                                                  justifyContent: 'space-between',
                                                },
                                                children: [
                                                  Object(bS.jsxs)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: ['ID: ', GP.id],
                                                  }),
                                                  Object(bS.jsxs)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: [
                                                      'expires in ',
                                                      bZ()(bZ()().valueOf()).diff(
                                                        1000 * Number(GP.expiry),
                                                        'days'
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  })
                                })
                              : Object(bS.jsx)(bS.Fragment, {}),
                          ],
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwDashboardInnerContentMiddle,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwDashboardInnerContentMiddleHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-dashboard-inner-content-middle-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'BOLO',
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwDashboardInnerContentMiddleHeaderTextRight,
                              children: Object(bS.jsx)('div', {
                                className: 'input-wrapper',
                                children: Object(bS.jsx)(xr.a, {
                                  fullWidth: true,
                                  sx: { width: '100%' },
                                  children: Object(bS.jsx)(xF.a, {
                                    sx: {
                                      '& .MuiInput-root': {
                                        color: 'white !important',
                                      },
                                      '& label.Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        { borderColor: 'darkgray !important' },
                                      '& .MuiInput-underline:before': {
                                        borderColor: 'darkgray !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:after': {
                                        borderColor: 'white !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .Mui-focused:after': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInputAdornment-root': {
                                        color: 'darkgray !important',
                                      },
                                    },
                                    id: 'input-with-icon-textfield',
                                    label: 'Search',
                                    variant: 'standard',
                                    InputProps: {
                                      startAdornment: Object(bS.jsx)(xT.a, {
                                        position: 'start',
                                        children: Object(bS.jsx)('i', {
                                          className:
                                            'fas fa-search fa-w-16 fa-fw',
                                        }),
                                      }),
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsx)('div', {
                          className: Gq.mdwDashboardInnerContentMiddleBody,
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwDashboardInnerContentRight,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwDashboardInnerContentRightHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-dashboard-inner-content-right-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'Bulletin Board',
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwDashboardInnerContentRightHeaderTextRight,
                              children: Object(bS.jsx)('div', {
                                className: 'input-wrapper',
                                children: Object(bS.jsx)(xr.a, {
                                  fullWidth: true,
                                  sx: { width: '100%' },
                                  children: Object(bS.jsx)(xF.a, {
                                    sx: {
                                      '& .MuiInput-root': {
                                        color: 'white !important',
                                      },
                                      '& label.Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        { borderColor: 'darkgray !important' },
                                      '& .MuiInput-underline:before': {
                                        borderColor: 'darkgray !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:after': {
                                        borderColor: 'white !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .Mui-focused:after': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInputAdornment-root': {
                                        color: 'darkgray !important',
                                      },
                                    },
                                    id: 'input-with-icon-textfield',
                                    label: 'Search',
                                    variant: 'standard',
                                    InputProps: {
                                      startAdornment: Object(bS.jsx)(xT.a, {
                                        position: 'start',
                                        children: Object(bS.jsx)('i', {
                                          className:
                                            'fas fa-search fa-w-16 fa-fw',
                                        }),
                                      }),
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsx)('div', {
                          className: Gq.mdwDashboardInnerContentRight,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          },
          bP = x2(804),
          bV = x2(822),
          bH = x2(823),
          bK = x2(808),
          bI = Object(bT.a)({
            mdwIncidentsOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwIncidentsInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwIncidentsInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwIncidentsContentWrapperMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwIncidentsTextContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
              paddingBottom: '1.5%',
            },
            mdwIncidentsAddCriminalContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsEvidenceContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsOfficersInvolvedContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsPersonsInvolvedContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsTagsContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsVehiclesContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsCriminalContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsInnerContainer: {
              width: '98vw',
              height: '96vh',
              display: 'flex',
              opacity: '1',
              position: 'absolute',
              transition: 'top 400ms ease-out 0s',
              flexDirection: 'column',
              backgroundColor: 'rgb(48, 71, 94)',
            },
            mdwIncidentsInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwIncidentsInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwIncidentsInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            checkbox: {
              '&:hover': { backgroundColor: 'transparent !important' },
            },
          }),
          bn = x2(85),
          bl = x2.n(bn),
          bm = x2(803),
          bh = x2(801),
          bB = x2(807),
          bN = function () {
            var Gq = bI(),
              Gw = Object(xz.c)(xj),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = (Gy[1], Object(xz.c)(xY)),
              GU = Object(xx.a)(Gc, 2),
              GQ = GU[0],
              GJ = (GU[1], Object(xz.c)(xO)),
              Gr = Object(xx.a)(GJ, 2),
              GF = Gr[0],
              GT = (Gr[1], Object(xz.c)(xs)),
              GR = Object(xx.a)(GT, 2),
              Ga = GR[0],
              GS = (GR[1], Object(x4.useState)(false)),
              GX = Object(xx.a)(GS, 2),
              Gf = GX[0],
              Go = GX[1],
              Gd = Object(xz.c)(xM),
              Gz = Object(xx.a)(Gd, 2),
              GE = (Gz[0], Gz[1]),
              GM = Object(xz.c)(b0),
              Gu = Object(xx.a)(GM, 2),
              Gg = Gu[0],
              GZ = Gu[1],
              GW = Object(xz.c)(b1),
              GP = Object(xx.a)(GW, 2),
              GV = GP[0],
              GH = GP[1],
              GK = Object(x4.useState)({}),
              GI = Object(xx.a)(GK, 2),
              Gn = (GI[0], GI[1]),
              Gl = Object(xz.c)(b4),
              Gm = Object(xx.a)(Gl, 2),
              Gh = Gm[0],
              GB = Gm[1],
              GN = Object(x4.useState)(''),
              Gk = Object(xx.a)(GN, 2),
              GC = Gk[0],
              GD = Gk[1],
              Gv = Object(x4.useState)(''),
              Gj = Object(xx.a)(Gv, 2),
              GY = Gj[0],
              Gi = Gj[1],
              GO = Object(x4.useState)(''),
              Gs = Object(xx.a)(GO, 2),
              L0 = Gs[0],
              L1 = Gs[1],
              L2 = Object(xz.c)(b5),
              L3 = Object(xx.a)(L2, 2),
              L4 = L3[0],
              L5 = L3[1],
              L6 = Object(xz.c)(b6),
              L7 = Object(xx.a)(L6, 2),
              L8 = L7[0],
              L9 = L7[1],
              Lx = Object(xz.c)(b8),
              Lb = Object(xx.a)(Lx, 2),
              LG = Lb[0],
              LL = Lb[1],
              Lp = Object(x4.useState)([]),
              Lq = Object(xx.a)(Lp, 2),
              Lw = (Lq[0], Lq[1]),
              Ly = Object(x4.useState)([]),
              LA = Object(xx.a)(Ly, 2),
              Lc = (LA[0], LA[1]),
              LU = Object(xz.c)(b9),
              LQ = Object(xx.a)(LU, 2),
              LJ = LQ[0],
              Lr = LQ[1],
              LF = Object(xz.c)(bx),
              LT = Object(xx.a)(LF, 2),
              LR = (LT[0], LT[1]),
              La = Object(xz.c)(bb),
              LS = Object(xx.a)(La, 2),
              LX = (LS[0], LS[1]),
              Lf = Object(xz.c)(bG),
              Lo = Object(xx.a)(Lf, 2),
              Ld = (Lo[0], Lo[1]),
              Lz = Object(xz.c)(bq),
              LE = Object(xx.a)(Lz, 2),
              LM = (LE[0], LE[1]),
              Lu = Object(xz.c)(bw),
              Lg = Object(xx.a)(Lu, 2),
              LZ = (Lg[0], Lg[1]),
              LW = Object(xz.c)(by),
              LP = Object(xx.a)(LW, 2),
              LV = (LP[0], LP[1]),
              LH = Object(xz.c)(bc),
              LK = Object(xx.a)(LH, 2),
              LI = (LK[0], LK[1]),
              Ln = Object(xz.c)(bU),
              Ll = Object(xx.a)(Ln, 2),
              Lm = (Ll[0], Ll[1]),
              Lh = Object(xz.c)(bQ),
              LB = Object(xx.a)(Lh, 2),
              LN = (LB[0], LB[1]),
              Lk = Object(x4.useState)(new Date()),
              LC = Object(xx.a)(Lk, 2),
              LD = LC[0],
              Lv = LC[1],
              Lj = Object(x4.useState)(''),
              LY = Object(xx.a)(Lj, 2),
              Li = LY[0],
              LO = LY[1],
              Ls = Object(xz.c)(xN),
              p0 = Object(xx.a)(Ls, 2),
              p1 = (p0[0], p0[1]),
              p2 = Object(xz.c)(bJ),
              p3 = Object(xx.a)(p2, 2),
              p4 = (p3[0], p3[1])
            Object(x4.useEffect)(function () {
              xL() ||
                xc('np-mdw:fetchIncidents', {}).then(function (p9) {
                  GZ(p9.data), GH(p9.data)
                })
            }, [])
            var p5 = function (p8) {
                GE(true)
                var p9 = L4.filter(function (px) {
                  return px.id.toString() !== p8.toString()
                })
                xc('np-mdw:updateIncident', {
                  id: Gh,
                  value: p9,
                  type: 'evidence',
                  add: false,
                }).then(function (px) {
                  GE(false)
                  L5(p9)
                })
              },
              p6 = function (p8, p9, px) {
                var pG = Object(x9.a)(LJ)
                if ('warrant' === p8) {
                  var pL = pG.findIndex(function (py) {
                    return py.cid.toString() === p9.toString()
                  })
                  pG[pL].warrant = px
                  Lr(pG)
                } else {
                  if ('warrantdate' === p8) {
                    var pp = pG.findIndex(function (py) {
                      return py.cid.toString() === p9.toString()
                    })
                    pG[pp].warrantdate = bZ()(px).format('X')
                    Lr(pG)
                    Lv(px)
                  } else {
                    if ('guilty' === p8) {
                      var pq = pG.findIndex(function (pA) {
                        return pA.cid.toString() === p9.toString()
                      })
                      pG[pq].guilty = px
                      Lr(pG)
                    } else {
                      if ('processed' === p8) {
                        var pw = pG.findIndex(function (pA) {
                          return pA.cid.toString() === p9.toString()
                        })
                        pG[pw].processed = px
                        Lr(pG)
                      }
                    }
                  }
                }
              }
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsx)('div', {
                className: Gq.mdwIncidentsOuterContent,
                children: Object(bS.jsxs)('div', {
                  className: Gq.mdwIncidentsInnerContent,
                  children: [
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwIncidentsInnerContentLeft,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsInnerContentLeftHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-incidents-inner-content-left-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'Incidents',
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwIncidentsInnerContentLeftHeaderTextRight,
                              children: Object(bS.jsx)('div', {
                                className: 'input-wrapper',
                                children: Object(bS.jsx)(xr.a, {
                                  fullWidth: true,
                                  sx: { width: '100%' },
                                  children: Object(bS.jsx)(xF.a, {
                                    sx: {
                                      '& .MuiInput-root': {
                                        color: 'white !important',
                                      },
                                      '& label.Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        { borderColor: 'darkgray !important' },
                                      '& .MuiInput-underline:before': {
                                        borderColor: 'darkgray !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:after': {
                                        borderColor: 'white !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .Mui-focused:after': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInputAdornment-root': {
                                        color: 'darkgray !important',
                                      },
                                    },
                                    id: 'input-with-icon-textfield',
                                    label: 'Search',
                                    variant: 'standard',
                                    onChange: function (p8) {
                                      return (function (px) {
                                        if ((Go(true), '' !== px)) {
                                          var pb = Gg.filter(function (pG) {
                                            var pL, pp, pq, pw, py, pA
                                            return (
                                              pG.id
                                                .toString()
                                                .toLowerCase()
                                                .startsWith(px.toLowerCase()) ||
                                              pG.title
                                                .toString()
                                                .toLowerCase()
                                                .startsWith(px.toLowerCase()) ||
                                              pG.author
                                                .toString()
                                                .toLowerCase()
                                                .startsWith(px.toLowerCase()) ||
                                              pG.info
                                                .toString()
                                                .toLowerCase()
                                                .startsWith(px.toLowerCase()) ||
                                              (null === (pL = pG.evidence) ||
                                              void 0 === pL
                                                ? void 0
                                                : pL
                                                    .toLowerCase()
                                                    .includes(
                                                      px.toLowerCase()
                                                    )) ||
                                              (null === (pp = pG.officers) ||
                                              void 0 === pp
                                                ? void 0
                                                : pp
                                                    .toLowerCase()
                                                    .includes(
                                                      px.toLowerCase()
                                                    )) ||
                                              (null === (pq = pG.persons) ||
                                              void 0 === pq
                                                ? void 0
                                                : pq
                                                    .toLowerCase()
                                                    .includes(
                                                      px.toLowerCase()
                                                    )) ||
                                              (null === (pw = pG.tags) ||
                                              void 0 === pw
                                                ? void 0
                                                : pw
                                                    .toLowerCase()
                                                    .includes(
                                                      px.toLowerCase()
                                                    )) ||
                                              (null === (py = pG.vehicles) ||
                                              void 0 === py
                                                ? void 0
                                                : py
                                                    .toLowerCase()
                                                    .includes(
                                                      px.toLowerCase()
                                                    )) ||
                                              (null === (pA = pG.criminals) ||
                                              void 0 === pA
                                                ? void 0
                                                : pA
                                                    .toLowerCase()
                                                    .includes(px.toLowerCase()))
                                            )
                                          })
                                          GH(pb)
                                          Go(false)
                                        } else {
                                          Go(false)
                                          GH(Gg)
                                        }
                                      })(p8.target.value)
                                    },
                                    InputProps: {
                                      startAdornment: Object(bS.jsx)(xT.a, {
                                        position: 'start',
                                        children: Object(bS.jsx)('i', {
                                          className:
                                            'fas fa-search fa-w-16 fa-fw',
                                        }),
                                      }),
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsInnerContentLeftBody,
                          children: [
                            GV && GV.length > 0
                              ? GV.map(function (p8) {
                                  return Object(bS.jsx)(
                                    'div',
                                    {
                                      onClick: function () {
                                        return (
                                          (pb = p8.id),
                                          GE(true),
                                          void xc('np-mdw:loadIncident', {
                                            value: pb,
                                          }).then(function (pG) {
                                            Go(false)
                                            Gn([])
                                            GB(0)
                                            GD('')
                                            Gi('Content goes here...')
                                            L1('Content goes here...')
                                            L9([])
                                            LL([])
                                            Lw([])
                                            Lc([])
                                            Lr([])
                                            ;(void 0 === pG.data.data &&
                                              null === pG.data.data) ||
                                              Gn(pG.data.data)
                                            ;(void 0 === pG.data.id &&
                                              null === pG.data.id) ||
                                              GB(pG.data.id)
                                            ;(void 0 === pG.data.title &&
                                              null === pG.data.title) ||
                                              GD(pG.data.title)
                                            ;(void 0 === pG.data.info &&
                                              null === pG.data.info) ||
                                              (Gi(pG.data.info), L1(pG.data.info))
                                            ;(void 0 === pG.data.officers &&
                                              null === pG.data.officers) ||
                                              L9(pG.data.officers)
                                            ;(void 0 === pG.data.persons &&
                                              null === pG.data.persons) ||
                                              LL(pG.data.persons)
                                            ;(void 0 === pG.data.criminals &&
                                              null === pG.data.criminals) ||
                                              Lr(pG.data.criminals)
                                            ;(void 0 === pG.data.evidence &&
                                              null === pG.data.evidence) ||
                                              L5(pG.data.evidence)
                                            GE(false)
                                          })
                                        )
                                        var pb
                                      },
                                      id: p8.id,
                                      className: 'component-paper cursor-pointer',
                                      style: {
                                        width: '100%',
                                        borderBottom: '0px solid #fff',
                                        borderRadius: '0px',
                                        backgroundColor: '#222831',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        className: 'main-container',
                                        children: Object(bS.jsx)('div', {
                                          className: 'details',
                                          children: Object(bS.jsxs)('div', {
                                            className: 'description',
                                            children: [
                                              Object(bS.jsx)('div', {
                                                className: 'flex-row',
                                                children: Object(bS.jsx)(bF.a, {
                                                  style: {
                                                    color: '#fff',
                                                    wordBreak: 'break-word',
                                                  },
                                                  variant: 'body2',
                                                  gutterBottom: true,
                                                  children: p8.title,
                                                }),
                                              }),
                                              Object(bS.jsxs)('div', {
                                                className: 'flex-row',
                                                style: {
                                                  justifyContent: 'space-between',
                                                },
                                                children: [
                                                  Object(bS.jsxs)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: ['ID: ', p8.id],
                                                  }),
                                                  Object(bS.jsxs)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: [
                                                      p8.author,
                                                      ' \u2500 ',
                                                      bZ()(
                                                        1000 * p8.unix
                                                      ).fromNow(),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    },
                                    p8.id
                                  )
                                })
                              : Object(bS.jsx)(bS.Fragment, {}),
                            Object(bS.jsx)('div', {
                              className: 'spinner-wrapper',
                              style: {
                                display: Gf ? '' : 'none',
                                alignItems: 'baseline',
                                marginTop: '15%',
                              },
                              children: Object(bS.jsxs)('div', {
                                className: 'lds-spinner',
                                children: [
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwIncidentsContentWrapperRight,
                      style: { overflowY: 'auto' },
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsTextContentMiddle,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwIncidentsInnerContentMiddleHeader,
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-incidents-inner-content-middle-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children:
                                      0 !== Gh
                                        ? 'Edit Incident (#'.concat(Gh, ')')
                                        : 'Create Incident',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentMiddleHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsxs)(xa.a, {
                                    direction: 'row',
                                    spacing: 1,
                                    children: [
                                      Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(bz.a, {
                                          title: 'Create New Incident',
                                          placement: 'top',
                                          sx: {
                                            backgroundColor:
                                              'rgba(97, 97, 97, 0.9)',
                                          },
                                          arrow: true,
                                          children: Object(bS.jsx)('i', {
                                            onClick: function () {
                                              Gn([])
                                              GB(0)
                                              GD('')
                                              Gi(
                                                '**LSPD Report** \n' +
                                                  bZ()().format(
                                                    'YYYY-MM-DD HH:MM:SS'
                                                  ) +
                                                  '\n **Reporting Officer** \n @' +
                                                  Ga +
                                                  ' ' +
                                                  GF +
                                                  ' ' +
                                                  GA +
                                                  ' ' +
                                                  GQ +
                                                  '\n **Assisting Officer/s:** \n **Suspect/s:** \n **Victim/s:** \n **Witnesses:** \n **Location:** \n **Debrief:**'
                                              )
                                              L1(
                                                '**LSPD Report** \n' +
                                                  bZ()().format(
                                                    'YYYY-MM-DD HH:MM:SS'
                                                  ) +
                                                  '\n **Reporting Officer** \n @' +
                                                  Ga +
                                                  ' ' +
                                                  GF +
                                                  ' ' +
                                                  GA +
                                                  ' ' +
                                                  GQ +
                                                  '\n **Assisting Officer/s:** \n **Suspect/s:** \n **Victim/s:** \n **Witnesses:** \n **Location:** \n **Debrief:**'
                                              )
                                              L9([])
                                              LL([])
                                              Lw([])
                                              Lc([])
                                              Lr([])
                                            },
                                            className: 'fas fa-file-alt fa-w-14',
                                            style: {
                                              display: 0 !== Gh ? '' : 'none',
                                              color: '#fff',
                                            },
                                          }),
                                        }),
                                      }),
                                      Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(bz.a, {
                                          title: 'Save Incident',
                                          placement: 'top',
                                          sx: {
                                            backgroundColor:
                                              'rgba(97, 97, 97, 0.9)',
                                          },
                                          arrow: true,
                                          children: Object(bS.jsx)('i', {
                                            onClick: function () {
                                              return (
                                                (p9 = 0 === Gh),
                                                GE(true),
                                                void (p9
                                                  ? xc('np-mdw:saveIncident', {
                                                      id: 0,
                                                      title: GC,
                                                      info: L0,
                                                      shouldCreate: p9,
                                                    }).then(function (pb) {
                                                      ;(void 0 ===
                                                        pb.data.incident.data &&
                                                        null ===
                                                          pb.data.incident
                                                            .data) ||
                                                        Gn(pb.data.incident.data)
                                                      ;(void 0 ===
                                                        pb.data.incident.id &&
                                                        null ===
                                                          pb.data.incident.id) ||
                                                        GB(pb.data.incident.id)
                                                      ;(void 0 ===
                                                        pb.data.incident.title &&
                                                        null ===
                                                          pb.data.incident
                                                            .title) ||
                                                        GD(pb.data.incident.title)
                                                      ;(void 0 ===
                                                        pb.data.incident.info &&
                                                        null ===
                                                          pb.data.incident
                                                            .info) ||
                                                        Gi(pb.data.incident.info)
                                                      ;(void 0 ===
                                                        pb.data.incident
                                                          .officers &&
                                                        null ===
                                                          pb.data.incident
                                                            .officers) ||
                                                        L9(
                                                          pb.data.incident
                                                            .officers
                                                        )
                                                      ;(void 0 ===
                                                        pb.data.incident
                                                          .persons &&
                                                        null ===
                                                          pb.data.incident
                                                            .persons) ||
                                                        LL(
                                                          pb.data.incident.persons
                                                        )
                                                      ;(void 0 ===
                                                        pb.data.incident
                                                          .criminals &&
                                                        null ===
                                                          pb.data.incident
                                                            .criminals) ||
                                                        Lr(
                                                          pb.data.incident
                                                            .criminals
                                                        )
                                                      ;(void 0 ===
                                                        pb.data.incident
                                                          .evidence &&
                                                        null ===
                                                          pb.data.incident
                                                            .evidence) ||
                                                        L5(
                                                          pb.data.incident
                                                            .evidence
                                                        )
                                                      GZ(pb.data.incidents)
                                                      GH(pb.data.incidents)
                                                      GE(false)
                                                    })
                                                  : xc('np-mdw:saveIncident', {
                                                      id: Gh,
                                                      title: GC,
                                                      info: L0,
                                                      evidence: L4,
                                                      officers: L8,
                                                      persons: LG,
                                                      shouldCreate: p9,
                                                    }).then(function (pb) {
                                                      GE(false)
                                                      GZ(pb.data.incidents)
                                                      GH(pb.data.incidents)
                                                    }))
                                              )
                                              var p9
                                            },
                                            className: 'fas fa-save fa-w-14',
                                            style: { color: '#fff' },
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: 'mdw-inner-content-pre-wrapper',
                              style: {
                                display: 'flex',
                                flexDirection: 'column',
                              },
                              children: Object(bS.jsx)('div', {
                                className: Gq.mdwIncidentsInnerContentMiddleBody,
                                style: { flexDirection: 'row' },
                                children: Object(bS.jsx)('div', {
                                  className: 'mdw-create-inputs',
                                  style: { width: '100%' },
                                  children: Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'Title',
                                        variant: 'standard',
                                        onChange: function (p8) {
                                          return GD(p8.target.value)
                                        },
                                        value: GC,
                                        InputProps: {
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-pen fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: 'mdw-create-document',
                              style: {
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#fff',
                              },
                              children: Object(bS.jsx)('div', {
                                className: 'mdw-creat-document-inner-cont',
                                style: {
                                  width: '97%',
                                  height: '99%',
                                },
                                children: Object(bS.jsx)(bl.a, {
                                  dark: true,
                                  onChange: function (p8) {
                                    var p9 = p8()
                                    L1(p9)
                                  },
                                  value: GY,
                                  disableExtensions: [
                                    'code_inline',
                                    'link',
                                    'ordered_list',
                                    'checkbox_item',
                                    'checkbox_list',
                                    'image',
                                    'placeholder',
                                    'container_notice',
                                    'table',
                                    'emoji',
                                    'td',
                                    'th',
                                    'tr',
                                    'hr',
                                    'code_fence',
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsEvidenceContentMiddle,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwIncidentsInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-incidents-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Evidence',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)(xa.a, {
                                    direction: 'row',
                                    spacing: 1,
                                    children: Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Add Evidence',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          onClick: function () {
                                            return LZ(true)
                                          },
                                          className: 'fas fa-plus fa-w-14',
                                          style: {
                                            display: 0 !== Gh ? '' : 'none',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwIncidentsInnerContentMiddleBody,
                              style: {
                                display: 0 !== Gh ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                L4 && L4.length > 0
                                  ? L4.map(function (p8) {
                                      return Object(bS.jsx)(bS.Fragment, {
                                        children:
                                          'photo' === p8.type
                                            ? Object(bS.jsxs)(bS.Fragment, {
                                                children: [
                                                  Object(bS.jsx)('div', {
                                                    id: p8.id,
                                                    style: {
                                                      paddingRight: '1.5%',
                                                      paddingBottom: '1.5%',
                                                      maxWidth: '100%',
                                                    },
                                                    onMouseEnter: function (pb) {
                                                      return LO(
                                                        pb.currentTarget.id
                                                      )
                                                    },
                                                    onMouseLeave: function () {
                                                      return LO('')
                                                    },
                                                    children: Object(bS.jsx)(
                                                      xX.a,
                                                      {
                                                        label: 'Photo ('.concat(
                                                          p8.description,
                                                          ')'
                                                        ),
                                                        onDelete: function () {
                                                          return p5(p8.id)
                                                        },
                                                        sx: {
                                                          backgroundColor:
                                                            '#4ea551',
                                                          color: '#000',
                                                          '& .MuiChip-deleteIcon':
                                                            { color: '#000' },
                                                          '& .MuiChip-deleteIcon:hover':
                                                            {
                                                              color:
                                                                'rgba(0, 0, 0, 0.5)',
                                                            },
                                                        },
                                                      }
                                                    ),
                                                  }),
                                                  Object(bS.jsx)(bP.a, {
                                                    open:
                                                      Li.toString() ===
                                                      p8.id.toString(),
                                                    style: {
                                                      zIndex: 1000,
                                                      left: '40%',
                                                      top: '10%',
                                                    },
                                                    placement: 'bottom-end',
                                                    disablePortal: false,
                                                    modifiers: [
                                                      {
                                                        name: 'flip',
                                                        enabled: false,
                                                        options: {
                                                          altBoundary: false,
                                                          rootBoundary:
                                                            'document',
                                                          padding: 8,
                                                        },
                                                      },
                                                      {
                                                        name: 'preventOverflow',
                                                        enabled: false,
                                                        options: {
                                                          altAxis: false,
                                                          altBoundary: true,
                                                          tether: false,
                                                          rootBoundary:
                                                            'document',
                                                          padding: 8,
                                                        },
                                                      },
                                                    ],
                                                    children: Object(bS.jsx)(
                                                      'div',
                                                      {
                                                        children: Object(bS.jsx)(
                                                          'img',
                                                          {
                                                            alt: '',
                                                            src: p8.identifier,
                                                            style: {
                                                              maxHeight: '600px',
                                                              maxWidth: '800px',
                                                            },
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              })
                                            : 'other' === p8.type
                                            ? Object(bS.jsx)(bS.Fragment, {})
                                            : 'blood' === p8.type
                                            ? Object(bS.jsx)(bS.Fragment, {
                                                children: Object(bS.jsx)('div', {
                                                  id: p8.id,
                                                  style: {
                                                    paddingRight: '1.5%',
                                                    paddingBottom: '1.5%',
                                                    maxWidth: '100%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: ''
                                                      .concat(
                                                        p8.identifier,
                                                        ' - ('
                                                      )
                                                      .concat(
                                                        p8.description,
                                                        ')'
                                                      ),
                                                    onDelete: function () {
                                                      return p5(p8.id)
                                                    },
                                                    sx: {
                                                      backgroundColor: '#ef4233',
                                                      color: '#fff',
                                                      '& .MuiChip-deleteIcon': {
                                                        color: '#fff',
                                                      },
                                                      '& .MuiChip-deleteIcon:hover':
                                                        {
                                                          color:
                                                            'rgba(255, 255, 255, 0.5)',
                                                        },
                                                    },
                                                  }),
                                                }),
                                              })
                                            : 'casing' === p8.type
                                            ? Object(bS.jsx)(bS.Fragment, {
                                                children: Object(bS.jsx)('div', {
                                                  id: p8.id,
                                                  style: {
                                                    paddingRight: '1.5%',
                                                    paddingBottom: '1.5%',
                                                    maxWidth: '100%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: 'Identifier: '
                                                      .concat(
                                                        p8.identifier,
                                                        ' - ('
                                                      )
                                                      .concat(
                                                        p8.description,
                                                        ')'
                                                      ),
                                                    onDelete: function () {
                                                      return p5(p8.id)
                                                    },
                                                    sx: {
                                                      backgroundColor: '#81ba64',
                                                      color: '#000',
                                                      '& .MuiChip-deleteIcon': {
                                                        color: '#000',
                                                      },
                                                      '& .MuiChip-deleteIcon:hover':
                                                        {
                                                          color:
                                                            'rgba(0, 0, 0, 0.5)',
                                                        },
                                                    },
                                                  }),
                                                }),
                                              })
                                            : 'weapon' === p8.type
                                            ? Object(bS.jsx)(bS.Fragment, {
                                                children: Object(bS.jsx)('div', {
                                                  id: p8.id,
                                                  style: {
                                                    paddingRight: '1.5%',
                                                    paddingBottom: '1.5%',
                                                    maxWidth: '100%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: ''
                                                      .concat(
                                                        p8.identifier,
                                                        ' - ('
                                                      )
                                                      .concat(
                                                        p8.description,
                                                        ')'
                                                      ),
                                                    onDelete: function () {
                                                      return p5(p8.id)
                                                    },
                                                    sx: {
                                                      backgroundColor: '#fff',
                                                      color: '#000',
                                                      '& .MuiChip-deleteIcon': {
                                                        color: '#000',
                                                      },
                                                      '& .MuiChip-deleteIcon:hover':
                                                        {
                                                          color:
                                                            'rgba(0, 0, 0, 0.5)',
                                                        },
                                                    },
                                                  }),
                                                }),
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {}),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsOfficersInvolvedContentMiddle,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwIncidentsInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-incidents-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Officers Involved',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)(xa.a, {
                                    direction: 'row',
                                    spacing: 1,
                                    children: Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Add Officer Involved',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          onClick: function () {
                                            LM(true)
                                            LV(true)
                                            xc('np-mdw:fetchOfficers', {}).then(
                                              function (p8) {
                                                LM(false)
                                                LX(p8.data)
                                                Ld(p8.data)
                                              }
                                            )
                                          },
                                          className: 'fas fa-plus fa-w-14',
                                          style: {
                                            display: 0 !== Gh ? '' : 'none',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwIncidentsInnerContentMiddleBody,
                              style: {
                                display: 0 !== Gh ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                L8 && L8.length > 0
                                  ? L8.map(function (p8) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: '('
                                            .concat(p8.callsign, ') ')
                                            .concat(p8.name),
                                          onDelete: function () {
                                            return (function (pb) {
                                              GE(true)
                                              var pL = L8.filter(function (pp) {
                                                return (
                                                  pp.cid.toString() !==
                                                  pb.toString()
                                                )
                                              })
                                              xc('np-mdw:updateIncident', {
                                                id: Gh,
                                                value: pL,
                                                type: 'officers',
                                                add: false,
                                              }).then(function (pp) {
                                                GE(false), L9(pL)
                                              })
                                            })(p8.cid)
                                          },
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            '& .MuiChip-deleteIcon': {
                                              color: '#000',
                                            },
                                            '& .MuiChip-deleteIcon:hover': {
                                              color: 'rgba(0, 0, 0, 0.5)',
                                            },
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsPersonsInvolvedContentMiddle,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwIncidentsInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-incidents-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Persons Involved',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)(xa.a, {
                                    direction: 'row',
                                    spacing: 1,
                                    children: Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Add Person Involved',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          onClick: function () {
                                            return LI(true)
                                          },
                                          className: 'fas fa-plus fa-w-14',
                                          style: {
                                            display: 0 !== Gh ? '' : 'none',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwIncidentsInnerContentMiddleBody,
                              style: {
                                display: 0 !== Gh ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                LG && LG.length > 0
                                  ? LG.map(function (p8) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: ''.concat(p8.name),
                                          onDelete: function () {
                                            return (function (pb) {
                                              GE(true)
                                              var pL = LG.filter(function (pp) {
                                                return (
                                                  pp.cid.toString() !==
                                                  pb.toString()
                                                )
                                              })
                                              xc('np-mdw:updateIncident', {
                                                id: Gh,
                                                value: pL,
                                                type: 'persons',
                                              }).then(function (pp) {
                                                Go(false)
                                                LL(pL)
                                              })
                                            })(p8.cid)
                                          },
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                            '& .MuiChip-deleteIcon': {
                                              color: '#000',
                                            },
                                            '& .MuiChip-deleteIcon:hover': {
                                              color: 'rgba(0, 0, 0, 0.5)',
                                            },
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsTagsContentMiddle,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwIncidentsInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-incidents-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Tags',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)(xa.a, {
                                    direction: 'row',
                                    spacing: 1,
                                    children: Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Add Tag',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          className: 'fas fa-plus fa-w-14',
                                          style: {
                                            display: 0 !== Gh ? '' : 'none',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwIncidentsInnerContentMiddleBody,
                              style: {
                                display: 0 !== Gh ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwIncidentsVehiclesContentMiddle,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwIncidentsInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-incidents-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Vehicles',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)(xa.a, {
                                    direction: 'row',
                                    spacing: 1,
                                    children: Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Add Vehicle',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          className: 'fas fa-plus fa-w-14',
                                          style: {
                                            display: 0 !== Gh ? '' : 'none',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwIncidentsInnerContentMiddleBody,
                              style: {
                                display: 0 !== Gh ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwIncidentsContentWrapperRight,
                      style: { overflowY: 'auto' },
                      children: [
                        Object(bS.jsx)('div', {
                          className: Gq.mdwIncidentsAddCriminalContentRight,
                          children: Object(bS.jsxs)('div', {
                            className: Gq.mdwIncidentsInnerContentRightHeader,
                            style: {
                              display: 'flex',
                              width: '100%',
                              padding: '8px',
                              minHeight: '48px',
                              justifyContent: 'space-between',
                            },
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-incidents-inner-content-right-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Add Criminal Scum',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                style: { paddingRight: '0px' },
                                children: Object(bS.jsx)(xa.a, {
                                  direction: 'row',
                                  spacing: 1,
                                  children: Object(bS.jsx)('div', {
                                    children: Object(bS.jsx)(bz.a, {
                                      title: 'Add Criminal',
                                      placement: 'top',
                                      sx: {
                                        backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                      },
                                      arrow: true,
                                      children: Object(bS.jsx)('i', {
                                        onClick: function () {
                                          return Lm(true)
                                        },
                                        className: 'fas fa-plus fa-w-14',
                                        style: {
                                          display: 0 !== Gh ? '' : 'none',
                                          color: '#fff',
                                        },
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        LJ && LJ.length > 0
                          ? LJ.map(function (p8) {
                              return Object(bS.jsxs)('div', {
                                className: Gq.mdwIncidentsCriminalContentRight,
                                style: { display: 0 !== Gh ? '' : 'none' },
                                children: [
                                  Object(bS.jsxs)('div', {
                                    className:
                                      Gq.mdwIncidentsInnerContentRightHeader,
                                    style: {
                                      display: 'flex',
                                      width: '100%',
                                      padding: '8px',
                                      minHeight: '48px',
                                      justifyContent: 'space-between',
                                    },
                                    children: [
                                      Object(bS.jsx)('div', {
                                        className:
                                          'mdw-incidents-inner-content-right-header-text-left',
                                        children: Object(bS.jsxs)(bF.a, {
                                          style: {
                                            color: '#fff',
                                            wordBreak: 'break-word',
                                          },
                                          variant: 'h6',
                                          gutterBottom: true,
                                          children: [p8.name, ' (#', p8.cid, ')'],
                                        }),
                                      }),
                                      Object(bS.jsx)('div', {
                                        className:
                                          Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                        style: { paddingRight: '0px' },
                                        children: Object(bS.jsxs)(xa.a, {
                                          direction: 'row',
                                          spacing: 1,
                                          children: [
                                            Object(bS.jsx)('div', {
                                              children: Object(bS.jsx)(bz.a, {
                                                title: 'Delete',
                                                placement: 'top',
                                                sx: {
                                                  backgroundColor:
                                                    'rgba(97, 97, 97, 0.9)',
                                                },
                                                arrow: true,
                                                children: Object(bS.jsx)('i', {
                                                  onClick: function () {
                                                    return (function (pG) {
                                                      GE(true)
                                                      var pL = LJ.filter(
                                                        function (pp) {
                                                          return (
                                                            pp.cid.toString() !==
                                                            pG.toString()
                                                          )
                                                        }
                                                      )
                                                      xc(
                                                        'np-mdw:updateIncident',
                                                        {
                                                          id: Gh,
                                                          value: pL,
                                                          type: 'criminals',
                                                        }
                                                      ).then(function (pp) {
                                                        GE(false)
                                                        Lr(pL)
                                                      })
                                                    })(p8.cid)
                                                  },
                                                  className:
                                                    'fas fa-trash fa-w-14',
                                                  style: { color: '#fff' },
                                                }),
                                              }),
                                            }),
                                            Object(bS.jsx)('div', {
                                              children: Object(bS.jsx)(bz.a, {
                                                title: 'Save',
                                                placement: 'top',
                                                sx: {
                                                  backgroundColor:
                                                    'rgba(97, 97, 97, 0.9)',
                                                },
                                                arrow: true,
                                                children: Object(bS.jsx)('i', {
                                                  onClick: function () {
                                                    return (
                                                      (pG = p8.cid),
                                                      GE(true),
                                                      void xc(
                                                        'np-mdw:saveCriminal',
                                                        {
                                                          id: Gh,
                                                          cid: pG,
                                                          value: LJ,
                                                        }
                                                      ).then(function (pp) {
                                                        GE(false)
                                                      })
                                                    )
                                                    var pG
                                                  },
                                                  className:
                                                    'fas fa-save fa-w-14',
                                                  style: { color: '#fff' },
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  Object(bS.jsxs)('div', {
                                    className:
                                      Gq.mdwIncidentsInnerContentRightBody,
                                    children: [
                                      Object(bS.jsxs)('div', {
                                        className:
                                          'mdw-inner-content-right-body-wrapper',
                                        style: {
                                          display: 'flex',
                                          flexDirection: 'row',
                                          flexWrap: 'wrap',
                                          flex: '0',
                                          overflowY: 'unset',
                                        },
                                        children: [
                                          Object(bS.jsx)('div', {
                                            style: {
                                              paddingRight: '1.5%',
                                              paddingBottom: '1.5%',
                                            },
                                            children: Object(bS.jsx)(xX.a, {
                                              onClick: function () {
                                                return (function (pG) {
                                                  if (
                                                    (p1([]),
                                                    LN(true),
                                                    p4(pG),
                                                    void 0 !== pG)
                                                  ) {
                                                    var pp = Object(x9.a)(LJ),
                                                      pq = pp.findIndex(function (
                                                        pA
                                                      ) {
                                                        return (
                                                          pA.cid.toString() ===
                                                          pG.toString()
                                                        )
                                                      }),
                                                      pw = pp[pq].charges
                                                    LR(pw || [])
                                                  }
                                                  xc(
                                                    'np-mdw:fetchCharges',
                                                    {}
                                                  ).then(function (pA) {
                                                    p1(pA.data)
                                                  })
                                                })(p8.cid)
                                              },
                                              label: 'Edit Charges',
                                              sx: {
                                                backgroundColor: '#fff',
                                                color: '#000',
                                              },
                                            }),
                                          }),
                                          p8.charges && p8.charges.length > 0
                                            ? p8.charges.map(function (pb) {
                                                return Object(bS.jsx)('div', {
                                                  style: {
                                                    paddingRight: '1.5%',
                                                    paddingBottom: '1.5%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: pb.title,
                                                    sx: {
                                                      backgroundColor: '#000',
                                                      color: '#fff',
                                                      '& .MuiChip-deleteIcon': {
                                                        color: '#fff',
                                                      },
                                                      '& .MuiChip-deleteIcon:hover':
                                                        {
                                                          color:
                                                            'rgba(255, 255, 255, 0.5)',
                                                        },
                                                    },
                                                  }),
                                                })
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {}),
                                        ],
                                      }),
                                      Object(bS.jsx)('div', {
                                        style: {
                                          marginTop: '1%',
                                          marginBottom: '0.3%',
                                        },
                                        children: Object(bS.jsx)(xf.a, {
                                          style: {
                                            borderColor: 'rgb(34, 40, 49)',
                                          },
                                          variant: 'fullWidth',
                                        }),
                                      }),
                                      Object(bS.jsxs)('div', {
                                        style: {
                                          flexDirection: 'row',
                                          marginBottom: '2%',
                                          display: 'flex',
                                        },
                                        children: [
                                          Object(bS.jsx)('div', {
                                            style: {
                                              width: '50%',
                                              position: 'relative',
                                            },
                                            children: Object(bS.jsx)(bV.a, {
                                              children: Object(bS.jsx)(bH.a, {
                                                style: {
                                                  color:
                                                    'rgba(255, 255, 255, 0.7)',
                                                },
                                                control: Object(bS.jsx)(bK.a, {
                                                  color: 'warning',
                                                  onChange: function (pb) {
                                                    return p6(
                                                      'warrant',
                                                      p8.cid,
                                                      pb.target.checked
                                                    )
                                                  },
                                                  disableFocusRipple: true,
                                                  disableRipple: true,
                                                  checked: p8.warrant,
                                                  classes: { root: Gq.checkbox },
                                                }),
                                                label: 'Warrant for Arrest',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)('div', {
                                            style: {
                                              width: '50%',
                                              position: 'relative',
                                              display: p8.warrant ? '' : 'none',
                                            },
                                            children: Object(bS.jsx)(bV.a, {
                                              style: { marginTop: '5%' },
                                              children: Object(bS.jsx)(bh.b, {
                                                dateAdapter: bm.a,
                                                children: Object(bS.jsx)(bB.a, {
                                                  label: 'Expiration Date',
                                                  value: LD,
                                                  onChange: function (pb) {
                                                    p6('warrantdate', p8.cid, pb)
                                                  },
                                                  renderInput: function (pb) {
                                                    return Object(bS.jsx)(
                                                      xF.a,
                                                      Object(x8.a)(
                                                        { variant: 'standard' },
                                                        pb
                                                      )
                                                    )
                                                  },
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(bS.jsx)('div', {
                                        style: {
                                          marginTop: '1%',
                                          marginBottom: '0.3%',
                                          display:
                                            p8.charges.length > 0 ? '' : 'none',
                                        },
                                        children: Object(bS.jsx)(xf.a, {
                                          style: {
                                            borderColor: 'rgb(34, 40, 49)',
                                          },
                                          variant: 'fullWidth',
                                        }),
                                      }),
                                      Object(bS.jsx)('div', {
                                        style: {
                                          marginTop: '1%',
                                          display:
                                            p8.charges.length > 0 ? '' : 'none',
                                        },
                                        children: Object(bS.jsxs)('div', {
                                          style: { marginTop: '1%' },
                                          children: [
                                            Object(bS.jsx)(bF.a, {
                                              style: {
                                                color: '#fff',
                                                wordBreak: 'break-word',
                                              },
                                              variant: 'h5',
                                              gutterBottom: true,
                                              children: 'Final',
                                            }),
                                            Object(bS.jsxs)(bF.a, {
                                              style: {
                                                color: '#fff',
                                                wordBreak: 'break-word',
                                              },
                                              variant: 'h6',
                                              gutterBottom: true,
                                              children: [
                                                p8.months,
                                                ' months (+0 months parole) / ',
                                                p8.fine.toLocaleString('en-Us', {
                                                  style: 'currency',
                                                  currency: 'USD',
                                                }),
                                                ' fine / ',
                                                p8.points,
                                                ' point(s)',
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      Object(bS.jsx)('div', {
                                        style: {
                                          marginTop: '1%',
                                          marginBottom: '0.3%',
                                          display:
                                            p8.charges.length > 0 ? '' : 'none',
                                        },
                                        children: Object(bS.jsx)(xf.a, {
                                          style: {
                                            borderColor: 'rgb(34, 40, 49)',
                                          },
                                          variant: 'fullWidth',
                                        }),
                                      }),
                                      Object(bS.jsxs)('div', {
                                        style: {
                                          flexDirection: 'row',
                                          marginBottom: '2%',
                                          display:
                                            p8.charges.length > 0
                                              ? 'flex'
                                              : 'none',
                                        },
                                        children: [
                                          Object(bS.jsx)('div', {
                                            style: {
                                              width: '50%',
                                              position: 'relative',
                                            },
                                            children: Object(bS.jsx)(bV.a, {
                                              children: Object(bS.jsx)(bH.a, {
                                                style: {
                                                  color:
                                                    'rgba(255, 255, 255, 0.7)',
                                                },
                                                control: Object(bS.jsx)(bK.a, {
                                                  color: 'warning',
                                                  onChange: function (pb) {
                                                    return p6(
                                                      'guilty',
                                                      p8.cid,
                                                      pb.target.checked
                                                    )
                                                  },
                                                  disableFocusRipple: true,
                                                  disableRipple: true,
                                                  checked: p8.guilty,
                                                  classes: { root: Gq.checkbox },
                                                }),
                                                label: 'Pleaded Guilty',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)('div', {
                                            style: {
                                              width: '50%',
                                              position: 'relative',
                                            },
                                            children: Object(bS.jsx)(bV.a, {
                                              children: Object(bS.jsx)(bH.a, {
                                                style: {
                                                  color:
                                                    'rgba(255, 255, 255, 0.7)',
                                                },
                                                control: Object(bS.jsx)(bK.a, {
                                                  color: 'warning',
                                                  onChange: function (pb) {
                                                    return p6(
                                                      'processed',
                                                      p8.cid,
                                                      pb.target.checked
                                                    )
                                                  },
                                                  disableFocusRipple: true,
                                                  disableRipple: true,
                                                  checked: p8.processed,
                                                  classes: { root: Gq.checkbox },
                                                }),
                                                label: 'Processed',
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            })
                          : Object(bS.jsx)(bS.Fragment, {}),
                      ],
                    }),
                  ],
                }),
              }),
            })
          },
          bk = Object(bT.a)({
            mdwIncidentsOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwIncidentsInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwIncidentsInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwIncidentsInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwIncidentsInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwIncidentsContentWrapperMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwIncidentsTextContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
              paddingBottom: '1.5%',
            },
            mdwIncidentsEmsInvolvedContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsPersonsInvolvedContentMiddle: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsCriminalContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwIncidentsInnerContainer: {
              width: '98vw',
              height: '96vh',
              display: 'flex',
              opacity: '1',
              position: 'absolute',
              transition: 'top 400ms ease-out 0s',
              flexDirection: 'column',
              backgroundColor: 'rgb(48, 71, 94)',
            },
            mdwIncidentsInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwIncidentsInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwIncidentsInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwIncidentsInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            checkbox: {
              '&:hover': { backgroundColor: 'transparent !important' },
            },
          }),
          bC = function () {
            var Gq = bk(),
              Gw = Object(xz.c)(xj),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = (Gy[1], Object(xz.c)(xY)),
              GU = Object(xx.a)(Gc, 2),
              GQ = GU[0],
              GJ = (GU[1], Object(xz.c)(xO)),
              Gr = Object(xx.a)(GJ, 2),
              GF = Gr[0],
              GT = (Gr[1], Object(xz.c)(xs)),
              GR = Object(xx.a)(GT, 2),
              Ga = GR[0],
              GS = (GR[1], Object(x4.useState)(false)),
              GX = Object(xx.a)(GS, 2),
              Gf = GX[0],
              Go = GX[1],
              Gd = Object(xz.c)(xM),
              Gz = Object(xx.a)(Gd, 2),
              GE = (Gz[0], Gz[1]),
              GM = Object(xz.c)(b2),
              Gu = Object(xx.a)(GM, 2),
              Gg = Gu[0],
              GZ = Gu[1],
              GW = Object(xz.c)(b3),
              GP = Object(xx.a)(GW, 2),
              GV = GP[0],
              GH = GP[1],
              GK = Object(x4.useState)({}),
              GI = Object(xx.a)(GK, 2),
              Gn = (GI[0], GI[1]),
              Gl = Object(xz.c)(b4),
              Gm = Object(xx.a)(Gl, 2),
              Gh = Gm[0],
              GB = Gm[1],
              GN = Object(x4.useState)(''),
              Gt = Object(xx.a)(GN, 2),
              Gk = Gt[0],
              GC = Gt[1],
              GD = Object(x4.useState)(''),
              Gv = Object(xx.a)(GD, 2),
              Gj = Gv[0],
              GY = Gv[1],
              Gi = Object(x4.useState)(''),
              GO = Object(xx.a)(Gi, 2),
              Gs = GO[0],
              L0 = GO[1],
              L1 = Object(xz.c)(b5),
              L2 = Object(xx.a)(L1, 2),
              L3 = L2[0],
              L4 = (L2[1], Object(xz.c)(b7)),
              L5 = Object(xx.a)(L4, 2),
              L6 = L5[0],
              L7 = L5[1],
              L8 = Object(xz.c)(b8),
              L9 = Object(xx.a)(L8, 2),
              Lx = L9[0],
              Lb = L9[1],
              LG = Object(xz.c)(bL),
              LL = Object(xx.a)(LG, 2),
              Lp = (LL[0], LL[1]),
              Lq = Object(xz.c)(bp),
              Lw = Object(xx.a)(Lq, 2),
              Ly = (Lw[0], Lw[1]),
              LA = Object(xz.c)(bq),
              Lc = Object(xx.a)(LA, 2),
              LU = (Lc[0], Lc[1]),
              LQ = Object(xz.c)(bA),
              LJ = Object(xx.a)(LQ, 2),
              Lr = (LJ[0], LJ[1]),
              LF = Object(xz.c)(bc),
              LT = Object(xx.a)(LF, 2),
              LR = (LT[0], LT[1])
            return (
              Object(x4.useEffect)(function () {
                xL() ||
                  xc('np-mdw:fetchIncidentsEms', {}).then(function (LX) {
                    GZ(LX.data)
                    GH(LX.data)
                  })
              }, []),
              Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsx)('div', {
                  className: Gq.mdwIncidentsOuterContent,
                  children: Object(bS.jsxs)('div', {
                    className: Gq.mdwIncidentsInnerContent,
                    children: [
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwIncidentsInnerContentLeft,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwIncidentsInnerContentLeftHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-incidents-inner-content-left-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Incidents',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwIncidentsInnerContentLeftHeaderTextRight,
                                children: Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (La) {
                                        return (function (Lf) {
                                          if ((Go(true), '' !== Lf)) {
                                            var Ld = Gg.filter(function (Lz) {
                                              return (
                                                Lz.id
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(Lf.toLowerCase()) ||
                                                Lz.title
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(Lf.toLowerCase()) ||
                                                Lz.author
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(Lf.toLowerCase()) ||
                                                Lz.info
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(Lf.toLowerCase())
                                              )
                                            })
                                            GH(Ld)
                                            Go(false)
                                          } else {
                                            Go(false)
                                            GH(Gg)
                                          }
                                        })(La.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwIncidentsInnerContentLeftBody,
                            children: [
                              GV && GV.length > 0
                                ? GV.map(function (La) {
                                    return Object(bS.jsx)(
                                      'div',
                                      {
                                        onClick: function () {
                                          return (
                                            (Lf = La.id),
                                            GE(true),
                                            void xc('np-mdw:loadIncidentEms', {
                                              value: Lf,
                                            }).then(function (Lo) {
                                              Go(false)
                                              Gn([])
                                              GB(0)
                                              GC('')
                                              GY('Content goes here...')
                                              L0('Content goes here...')
                                              L7([])
                                              Lb([])
                                              ;(void 0 === Lo.data.data &&
                                                null === Lo.data.data) ||
                                                Gn(Lo.data.data)
                                              ;(void 0 === Lo.data.id &&
                                                null === Lo.data.id) ||
                                                GB(Lo.data.id)
                                              ;(void 0 === Lo.data.title &&
                                                null === Lo.data.title) ||
                                                GC(Lo.data.title)
                                              ;(void 0 === Lo.data.info &&
                                                null === Lo.data.info) ||
                                                (GY(Lo.data.info),
                                                L0(Lo.data.info))
                                              ;(void 0 === Lo.data.ems &&
                                                null === Lo.data.ems) ||
                                                L7(Lo.data.ems)
                                              ;(void 0 === Lo.data.persons &&
                                                null === Lo.data.persons) ||
                                                Lb(Lo.data.persons)
                                              GE(false)
                                            })
                                          )
                                          var Lf
                                        },
                                        id: La.id,
                                        className:
                                          'component-paper cursor-pointer',
                                        style: {
                                          width: '100%',
                                          borderBottom: '0px solid #fff',
                                          borderRadius: '0px',
                                          backgroundColor: '#222831',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'main-container',
                                          children: Object(bS.jsx)('div', {
                                            className: 'details',
                                            children: Object(bS.jsxs)('div', {
                                              className: 'description',
                                              children: [
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsx)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: La.title,
                                                  }),
                                                }),
                                                Object(bS.jsxs)('div', {
                                                  className: 'flex-row',
                                                  style: {
                                                    justifyContent:
                                                      'space-between',
                                                  },
                                                  children: [
                                                    Object(bS.jsxs)(bF.a, {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: ['ID: ', La.id],
                                                    }),
                                                    Object(bS.jsxs)(bF.a, {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: [
                                                        La.author,
                                                        ' \u2500 ',
                                                        bZ()(
                                                          1000 * La.unix
                                                        ).fromNow(),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                      La.id
                                    )
                                  })
                                : Object(bS.jsx)(bS.Fragment, {}),
                              Object(bS.jsx)('div', {
                                className: 'spinner-wrapper',
                                style: {
                                  display: Gf ? '' : 'none',
                                  alignItems: 'baseline',
                                  marginTop: '15%',
                                },
                                children: Object(bS.jsxs)('div', {
                                  className: 'lds-spinner',
                                  children: [
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwIncidentsContentWrapperRight,
                        style: { overflowY: 'auto' },
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwIncidentsTextContentMiddle,
                            children: [
                              Object(bS.jsxs)('div', {
                                className:
                                  Gq.mdwIncidentsInnerContentMiddleHeader,
                                children: [
                                  Object(bS.jsx)('div', {
                                    className:
                                      'mdw-incidents-inner-content-middle-header-text-left',
                                    children: Object(bS.jsx)(bF.a, {
                                      style: {
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                      },
                                      variant: 'h6',
                                      gutterBottom: true,
                                      children:
                                        0 !== Gh
                                          ? 'Edit Incident (#'.concat(Gh, ')')
                                          : 'Create Incident',
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className:
                                      Gq.mdwIncidentsInnerContentMiddleHeaderTextRight,
                                    style: { paddingRight: '0px' },
                                    children: Object(bS.jsxs)(xa.a, {
                                      direction: 'row',
                                      spacing: 1,
                                      children: [
                                        Object(bS.jsx)('div', {
                                          children: Object(bS.jsx)(bz.a, {
                                            title: 'Create New Incident',
                                            placement: 'top',
                                            sx: {
                                              backgroundColor:
                                                'rgba(97, 97, 97, 0.9)',
                                            },
                                            arrow: true,
                                            children: Object(bS.jsx)('i', {
                                              onClick: function () {
                                                Gn([])
                                                GB(0)
                                                GC('')
                                                GY(
                                                  '**EMS Report** \n' +
                                                    bZ()().format(
                                                      'YYYY-MM-DD HH:MM:SS'
                                                    ) +
                                                    '\n **Reporting EMS** \n @' +
                                                    Ga +
                                                    ' ' +
                                                    GF +
                                                    ' ' +
                                                    GA +
                                                    ' ' +
                                                    GQ +
                                                    '\n **Assisting Officer/s:** \n **Attending:** \n **Debrief:**'
                                                )
                                                L0(
                                                  '**EMS Report** \n' +
                                                    bZ()().format(
                                                      'YYYY-MM-DD HH:MM:SS'
                                                    ) +
                                                    '\n **Reporting EMS** \n @' +
                                                    Ga +
                                                    ' ' +
                                                    GF +
                                                    ' ' +
                                                    GA +
                                                    ' ' +
                                                    GQ +
                                                    '\n **Assisting Officer/s:** \n **Attending:** \n **Debrief:**'
                                                )
                                                L7([])
                                                Lb([])
                                              },
                                              className:
                                                'fas fa-file-alt fa-w-14',
                                              style: {
                                                display: 0 !== Gh ? '' : 'none',
                                                color: '#fff',
                                              },
                                            }),
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          children: Object(bS.jsx)(bz.a, {
                                            title: 'Save Incident',
                                            placement: 'top',
                                            sx: {
                                              backgroundColor:
                                                'rgba(97, 97, 97, 0.9)',
                                            },
                                            arrow: true,
                                            children: Object(bS.jsx)('i', {
                                              onClick: function () {
                                                return (
                                                  (LS = 0 === Gh),
                                                  GE(true),
                                                  void (LS
                                                    ? xc(
                                                        'np-mdw:saveIncidentEms',
                                                        {
                                                          id: 0,
                                                          title: Gk,
                                                          info: Gs,
                                                          shouldCreate: LS,
                                                        }
                                                      ).then(function (LX) {
                                                        ;(void 0 ===
                                                          LX.data.incident.data &&
                                                          null ===
                                                            LX.data.incident
                                                              .data) ||
                                                          Gn(
                                                            LX.data.incident.data
                                                          )
                                                        ;(void 0 ===
                                                          LX.data.incident.id &&
                                                          null ===
                                                            LX.data.incident
                                                              .id) ||
                                                          GB(LX.data.incident.id)
                                                        ;(void 0 ===
                                                          LX.data.incident
                                                            .title &&
                                                          null ===
                                                            LX.data.incident
                                                              .title) ||
                                                          GC(
                                                            LX.data.incident.title
                                                          )
                                                        ;(void 0 ===
                                                          LX.data.incident.info &&
                                                          null ===
                                                            LX.data.incident
                                                              .info) ||
                                                          GY(
                                                            LX.data.incident.info
                                                          )
                                                        ;(void 0 ===
                                                          LX.data.incident.ems &&
                                                          null ===
                                                            LX.data.incident
                                                              .ems) ||
                                                          L7(LX.data.incident.ems)
                                                        ;(void 0 ===
                                                          LX.data.incident
                                                            .persons &&
                                                          null ===
                                                            LX.data.incident
                                                              .persons) ||
                                                          Lb(
                                                            LX.data.incident
                                                              .persons
                                                          )
                                                        GZ(LX.data.incidents)
                                                        GH(LX.data.incidents)
                                                        GE(false)
                                                      })
                                                    : xc(
                                                        'np-mdw:saveIncidentEms',
                                                        {
                                                          id: Gh,
                                                          title: Gk,
                                                          info: Gs,
                                                          evidence: L3,
                                                          ems: L6,
                                                          persons: Lx,
                                                          shouldCreate: LS,
                                                        }
                                                      ).then(function (LX) {
                                                        GE(false)
                                                        GZ(LX.data.incidents)
                                                        GH(LX.data.incidents)
                                                      }))
                                                )
                                                var LS
                                              },
                                              className: 'fas fa-save fa-w-14',
                                              style: { color: '#fff' },
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              Object(bS.jsx)('div', {
                                className: 'mdw-inner-content-pre-wrapper',
                                style: {
                                  display: 'flex',
                                  flexDirection: 'column',
                                },
                                children: Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwIncidentsInnerContentMiddleBody,
                                  style: { flexDirection: 'row' },
                                  children: Object(bS.jsx)('div', {
                                    className: 'mdw-create-inputs',
                                    style: { width: '100%' },
                                    children: Object(bS.jsx)('div', {
                                      className: 'input-wrapper',
                                      style: { marginBottom: '2.5%' },
                                      children: Object(bS.jsx)(xr.a, {
                                        fullWidth: true,
                                        sx: { width: '100%' },
                                        children: Object(bS.jsx)(xF.a, {
                                          sx: {
                                            '& .MuiInput-root': {
                                              color: 'white !important',
                                            },
                                            '& label.Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                              {
                                                borderColor:
                                                  'darkgray !important',
                                              },
                                            '& .MuiInput-underline:before': {
                                              borderColor: 'darkgray !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:after': {
                                              borderColor: 'white !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .Mui-focused:after': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInputAdornment-root': {
                                              color: 'darkgray !important',
                                            },
                                          },
                                          id: 'input-with-icon-textfield',
                                          label: 'Title',
                                          variant: 'standard',
                                          onChange: function (La) {
                                            return GC(La.target.value)
                                          },
                                          value: Gk,
                                          InputProps: {
                                            startAdornment: Object(bS.jsx)(xT.a, {
                                              position: 'start',
                                              children: Object(bS.jsx)('i', {
                                                className:
                                                  'fas fa-pen fa-w-16 fa-fw',
                                              }),
                                            }),
                                          },
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className: 'mdw-create-document',
                                style: {
                                  width: '100%',
                                  height: '100%',
                                  display: 'flex',
                                  justifyContent: 'center',
                                  color: '#fff',
                                },
                                children: Object(bS.jsx)('div', {
                                  className: 'mdw-creat-document-inner-cont',
                                  style: {
                                    width: '97%',
                                    height: '99%',
                                  },
                                  children: Object(bS.jsx)(bl.a, {
                                    dark: true,
                                    onChange: function (La) {
                                      var LS = La()
                                      L0(LS)
                                    },
                                    value: Gj,
                                    disableExtensions: [
                                      'code_inline',
                                      'link',
                                      'ordered_list',
                                      'checkbox_item',
                                      'checkbox_list',
                                      'image',
                                      'placeholder',
                                      'container_notice',
                                      'table',
                                      'emoji',
                                      'td',
                                      'th',
                                      'tr',
                                      'hr',
                                      'code_fence',
                                      'code_block',
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwIncidentsEmsInvolvedContentMiddle,
                            children: [
                              Object(bS.jsxs)('div', {
                                className: Gq.mdwIncidentsInnerContentRightHeader,
                                style: {
                                  display: 'flex',
                                  width: '100%',
                                  padding: '8px',
                                  minHeight: '48px',
                                  justifyContent: 'space-between',
                                },
                                children: [
                                  Object(bS.jsx)('div', {
                                    className:
                                      'mdw-incidents-inner-content-right-header-text-left',
                                    children: Object(bS.jsx)(bF.a, {
                                      style: {
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                      },
                                      variant: 'h6',
                                      gutterBottom: true,
                                      children: 'EMS Involved',
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className:
                                      Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                    style: { paddingRight: '0px' },
                                    children: Object(bS.jsx)(xa.a, {
                                      direction: 'row',
                                      spacing: 1,
                                      children: Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(bz.a, {
                                          title: 'Add EMS Involved',
                                          placement: 'top',
                                          sx: {
                                            backgroundColor:
                                              'rgba(97, 97, 97, 0.9)',
                                          },
                                          arrow: true,
                                          children: Object(bS.jsx)('i', {
                                            onClick: function () {
                                              LU(true)
                                              Lr(true)
                                              xc('np-mdw:fetchEms', {}).then(
                                                function (LX) {
                                                  LU(false)
                                                  Lp(LX.data)
                                                  Ly(LX.data)
                                                }
                                              )
                                            },
                                            className: 'fas fa-plus fa-w-14',
                                            style: {
                                              display: 0 !== Gh ? '' : 'none',
                                              color: '#fff',
                                            },
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              Object(bS.jsx)('div', {
                                className: Gq.mdwIncidentsInnerContentMiddleBody,
                                style: {
                                  display: 0 !== Gh ? '' : 'none',
                                  flexDirection: 'row',
                                  flexWrap: 'wrap',
                                  flex: '0',
                                  overflowY: 'unset',
                                },
                                children:
                                  L6 && L6.length > 0
                                    ? L6.map(function (La) {
                                        return Object(bS.jsx)('div', {
                                          style: {
                                            paddingRight: '1.5%',
                                            paddingBottom: '1.5%',
                                          },
                                          children: Object(bS.jsx)(xX.a, {
                                            label: '('
                                              .concat(La.callsign, ') ')
                                              .concat(La.name),
                                            onDelete: function () {
                                              return (function (Lf) {
                                                GE(true)
                                                var Ld = L6.filter(function (Lz) {
                                                  return (
                                                    Lz.cid.toString() !==
                                                    Lf.toString()
                                                  )
                                                })
                                                xc('np-mdw:updateIncidentEms', {
                                                  id: Gh,
                                                  value: Ld,
                                                  type: 'ems',
                                                  add: false,
                                                }).then(function (Lz) {
                                                  GE(false)
                                                  L7(Ld)
                                                })
                                              })(La.cid)
                                            },
                                            sx: {
                                              backgroundColor: '#fff',
                                              color: '#000',
                                              '& .MuiChip-deleteIcon': {
                                                color: '#000',
                                              },
                                              '& .MuiChip-deleteIcon:hover': {
                                                color: 'rgba(0, 0, 0, 0.5)',
                                              },
                                            },
                                          }),
                                        })
                                      })
                                    : Object(bS.jsx)(bS.Fragment, {}),
                              }),
                            ],
                          }),
                          Object(bS.jsxs)('div', {
                            className:
                              Gq.mdwIncidentsPersonsInvolvedContentMiddle,
                            children: [
                              Object(bS.jsxs)('div', {
                                className: Gq.mdwIncidentsInnerContentRightHeader,
                                style: {
                                  display: 'flex',
                                  width: '100%',
                                  padding: '8px',
                                  minHeight: '48px',
                                  justifyContent: 'space-between',
                                },
                                children: [
                                  Object(bS.jsx)('div', {
                                    className:
                                      'mdw-incidents-inner-content-right-header-text-left',
                                    children: Object(bS.jsx)(bF.a, {
                                      style: {
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                      },
                                      variant: 'h6',
                                      gutterBottom: true,
                                      children: 'Persons Involved',
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className:
                                      Gq.mdwIncidentsInnerContentRightHeaderTextRight,
                                    style: { paddingRight: '0px' },
                                    children: Object(bS.jsx)(xa.a, {
                                      direction: 'row',
                                      spacing: 1,
                                      children: Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(bz.a, {
                                          title: 'Add Person Involved',
                                          placement: 'top',
                                          sx: {
                                            backgroundColor:
                                              'rgba(97, 97, 97, 0.9)',
                                          },
                                          arrow: true,
                                          children: Object(bS.jsx)('i', {
                                            onClick: function () {
                                              LR(true)
                                            },
                                            className: 'fas fa-plus fa-w-14',
                                            style: {
                                              display: 0 !== Gh ? '' : 'none',
                                              color: '#fff',
                                            },
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              Object(bS.jsx)('div', {
                                className: Gq.mdwIncidentsInnerContentMiddleBody,
                                style: {
                                  display: 0 !== Gh ? '' : 'none',
                                  flexDirection: 'row',
                                  flexWrap: 'wrap',
                                  flex: '0',
                                  overflowY: 'unset',
                                },
                                children:
                                  Lx && Lx.length > 0
                                    ? Lx.map(function (La) {
                                        return Object(bS.jsx)('div', {
                                          style: {
                                            paddingRight: '1.5%',
                                            paddingBottom: '1.5%',
                                          },
                                          children: Object(bS.jsx)(xX.a, {
                                            label: ''.concat(La.name),
                                            onDelete: function () {
                                              return (function (LX) {
                                                var Lo = Lx.filter(function (Ld) {
                                                  return (
                                                    Ld.cid.toString() !==
                                                    LX.toString()
                                                  )
                                                })
                                                xc('np-mdw:updateIncidentEms', {
                                                  id: Gh,
                                                  value: Lo,
                                                  type: 'persons',
                                                }).then(function (Ld) {
                                                  Lb(Lo)
                                                })
                                              })(La.cid)
                                            },
                                            sx: {
                                              backgroundColor: '#fff',
                                              color: '#000',
                                              '& .MuiChip-deleteIcon': {
                                                color: '#000',
                                              },
                                              '& .MuiChip-deleteIcon:hover': {
                                                color: 'rgba(0, 0, 0, 0.5)',
                                              },
                                            },
                                          }),
                                        })
                                      })
                                    : Object(bS.jsx)(bS.Fragment, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwIncidentsContentWrapperRight,
                        style: { overflowY: 'auto' },
                      }),
                    ],
                  }),
                }),
              })
            )
          },
          bD = Object(bT.a)({
            mdwProfilesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwProfilesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwProfilesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwProfilesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwProfilesInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwProfilesInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwProfilesInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwProfilesInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwProfilesInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwCreateImage: { marginRight: '8px' },
            mdwProfilesContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwProfilesLicensesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesTagsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesVehiclesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesHousingContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesHotelsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesStorageContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesEmploymentContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesPriorsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwProfilesInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwProfilesInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwProfilesInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwProfilesInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwProfilesInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            checkbox: {
              '&:hover': { backgroundColor: 'transparent !important' },
            },
            mdwAssignLicenseModalContainer: {
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              display: 'flex',
              zIndex: '1000',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            },
            mdwAssignLicenseModalInnerContainer: {
              width: 'calc(23% - 64px)',
              height: 'auto',
              display: 'flex',
              overflow: 'hidden scroll',
              position: 'relative',
              maxHeight: '80%',
              minHeight: '22%',
              backgroundColor: 'rgb(34, 40, 49)',
            },
          }),
          bv = function () {
            var Gq = bD(),
              Gw = Object(xz.c)(xE),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = (Gy[1], Object(x4.useState)(false)),
              GU = Object(xx.a)(Gc, 2),
              GQ = GU[0],
              GJ = GU[1],
              Gr = Object(xz.c)(xu),
              GF = Object(xx.a)(Gr, 2),
              GT = (GF[0], GF[1]),
              GR = Object(x4.useState)([]),
              Ga = Object(xx.a)(GR, 2),
              GS = Ga[0],
              GX = Ga[1],
              Gf = Object(xz.c)(xM),
              Go = Object(xx.a)(Gf, 2),
              Gd = (Go[0], Go[1]),
              Gz = Object(x4.useState)({}),
              GE = Object(xx.a)(Gz, 2),
              GM = GE[0],
              Gu = GE[1],
              Gg = Object(xz.c)(xW),
              GZ = Object(xx.a)(Gg, 2),
              GW = GZ[0],
              GP = GZ[1],
              GV = Object(x4.useState)({}),
              GH = Object(xx.a)(GV, 2),
              GK = (GH[0], GH[1]),
              GI = Object(x4.useState)({}),
              Gn = Object(xx.a)(GI, 2),
              Gl = Gn[0],
              Gm = Gn[1],
              Gh = Object(x4.useState)({}),
              GB = Object(xx.a)(Gh, 2),
              GN = GB[0],
              Gt = GB[1],
              Gk = Object(x4.useState)({}),
              GC = Object(xx.a)(Gk, 2),
              GD = GC[0],
              Gv = GC[1],
              Gj = Object(x4.useState)({}),
              GY = Object(xx.a)(Gj, 2),
              Gi = GY[0],
              GO = GY[1],
              Gs = Object(x4.useState)({}),
              L0 = Object(xx.a)(Gs, 2),
              L1 = L0[0],
              L2 = L0[1],
              L3 = Object(x4.useState)(''),
              L4 = Object(xx.a)(L3, 2),
              L5 = L4[0],
              L6 = L4[1],
              L7 = Object(x4.useState)(''),
              L8 = Object(xx.a)(L7, 2),
              L9 = L8[0],
              Lx = L8[1],
              Lb = Object(x4.useState)(''),
              LG = Object(xx.a)(Lb, 2),
              LL = LG[0],
              Lp = LG[1],
              Lq = Object(xz.c)(xP),
              Lw = Object(xx.a)(Lq, 2),
              Ly = Lw[0],
              LA = Lw[1],
              Lc = Object(x4.useState)(''),
              LU = Object(xx.a)(Lc, 2),
              LQ = LU[0],
              LJ = LU[1],
              Lr = Object(xz.c)(br),
              LF = Object(xx.a)(Lr, 2),
              LT = LF[0]
            LF[1]
            Object(x4.useEffect)(function () {
              xL() ||
                (Gu([]),
                GP([]),
                GK([]),
                Gm([]),
                Gt([]),
                GO([]),
                L2([]),
                L6(''),
                LJ(''),
                Lx(''),
                Lp(''),
                LA(''))
            }, [])
            var LR = function (La) {
              Gd(true)
              xc('np-mdw:loadProfile', { value: La }).then(function (LX) {
                GJ(false)
                Gu(LX.data.profile)
                GP(LX.data.licenses)
                Gm(LX.data.vehicles)
                Gt(LX.data.housing)
                Gv(LX.data.storages)
                GO(LX.data.employment)
                L2(LX.data.priors)
                L6('')
                Lx('')
                Lp('')
                LA('')
                ;(void 0 !== LX.data.profile.first_name ||
                  (null !== LX.data.profile.first_name &&
                    void 0 !== LX.data.profile.last_name) ||
                  null !== LX.data.profile.last_name) &&
                  Lx(
                    ''
                      .concat(LX.data.profile.first_name, ' ')
                      .concat(LX.data.profile.last_name, ' ')
                  )
                ;(void 0 === LX.data.profile.profilepic &&
                  null === LX.data.profile.profilepic) ||
                  Lp(LX.data.profile.profilepic)
                ;(void 0 === LX.data.profile.id && null === LX.data.profile.id) ||
                  LA(LX.data.profile.id)
                ;(void 0 === LX.data.profile.information &&
                  null === LX.data.profile.information) ||
                  L6(LX.data.profile.information)
                Gd(false)
              })
            }
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsx)('div', {
                className: Gq.mdwProfilesOuterContent,
                children: Object(bS.jsxs)('div', {
                  className: Gq.mdwProfilesInnerContent,
                  children: [
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwProfilesInnerContentLeft,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesInnerContentLeftHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-profiles-inner-content-left-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'Profiles',
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwProfilesInnerContentLeftHeaderTextRight,
                              children: Object(bS.jsx)('div', {
                                className: 'input-wrapper',
                                children: Object(bS.jsx)(xr.a, {
                                  fullWidth: true,
                                  sx: { width: '100%' },
                                  children: Object(bS.jsx)(xF.a, {
                                    sx: {
                                      '& .MuiInput-root': {
                                        color: 'white !important',
                                      },
                                      '& label.Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        { borderColor: 'darkgray !important' },
                                      '& .MuiInput-underline:before': {
                                        borderColor: 'darkgray !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:after': {
                                        borderColor: 'white !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .Mui-focused:after': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInputAdornment-root': {
                                        color: 'darkgray !important',
                                      },
                                    },
                                    id: 'input-with-icon-textfield',
                                    label: 'Search',
                                    variant: 'standard',
                                    onChange: function (La) {
                                      return (function (LX) {
                                        if ('' === LX || void 0 === LX) {
                                          return GJ(false), void GX([])
                                        }
                                        GX([])
                                        GJ(true)
                                        xc('np-mdw:searchProfiles', {
                                          value: LX,
                                        }).then(function (Lf) {
                                          GJ(false)
                                          GX(Lf.data)
                                        })
                                      })(La.target.value)
                                    },
                                    InputProps: {
                                      startAdornment: Object(bS.jsx)(xT.a, {
                                        position: 'start',
                                        children: Object(bS.jsx)('i', {
                                          className:
                                            'fas fa-search fa-w-16 fa-fw',
                                        }),
                                      }),
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesInnerContentLeftBody,
                          children: [
                            GS && GS.length > 0
                              ? GS.map(function (La) {
                                  return Object(bS.jsx)(bS.Fragment, {
                                    children: Object(bS.jsx)(
                                      'div',
                                      {
                                        onClick: function () {
                                          return LR(La.id)
                                        },
                                        id: La.id,
                                        className:
                                          'component-paper cursor-pointer',
                                        style: {
                                          width: '100%',
                                          borderBottom: '0px solid #fff',
                                          borderRadius: '0px',
                                          backgroundColor: '#222831',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'main-container',
                                          children: Object(bS.jsx)('div', {
                                            className: 'details',
                                            children: Object(bS.jsxs)('div', {
                                              className: 'description',
                                              children: [
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsxs)(
                                                    bF.a,
                                                    {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: [
                                                        La.first_name,
                                                        ' ',
                                                        La.last_name,
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsxs)(
                                                    bF.a,
                                                    {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: ['ID: ', La.id],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                      La.id
                                    ),
                                  })
                                })
                              : Object(bS.jsx)(bS.Fragment, {}),
                            Object(bS.jsx)('div', {
                              className: 'spinner-wrapper',
                              style: {
                                display: GQ ? '' : 'none',
                                alignItems: 'baseline',
                                marginTop: '15%',
                              },
                              children: Object(bS.jsxs)('div', {
                                className: 'lds-spinner',
                                children: [
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwProfilesInnerContentMiddle,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesInnerContentMiddleHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-profiles-inner-content-middle-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children:
                                  void 0 === GM.id || GA
                                    ? GA
                                      ? 'Profile'
                                      : 'Create Profile'
                                    : 'Edit Profile (#'.concat(GM.id, ')'),
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwProfilesInnerContentMiddleHeaderTextRight,
                              style: { paddingRight: '0px' },
                              children: Object(bS.jsxs)(xa.a, {
                                direction: 'row',
                                spacing: 1,
                                children: [
                                  Object(bS.jsx)('div', {
                                    children: Object(bS.jsx)(bz.a, {
                                      title: 'Create New Profile',
                                      placement: 'top',
                                      sx: {
                                        backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                      },
                                      arrow: true,
                                      children: Object(bS.jsx)('i', {
                                        onClick: function () {
                                          Gu([])
                                          GP([])
                                          GK([])
                                          Gm([])
                                          Gt([])
                                          GO([])
                                          L2([])
                                          L6('')
                                          LJ('')
                                          Lx('')
                                          Lp('')
                                          LA('')
                                        },
                                        className: 'fas fa-file-alt fa-w-14',
                                        style: {
                                          display:
                                            void 0 === GM.id || GA ? 'none' : '',
                                          color: '#fff',
                                        },
                                      }),
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    children: Object(bS.jsx)(bz.a, {
                                      title: 'Save Profile',
                                      placement: 'top',
                                      sx: {
                                        backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                      },
                                      arrow: true,
                                      children: Object(bS.jsx)('i', {
                                        onClick: function () {
                                          void 0 === GM.id ||
                                            (Gd(true),
                                            xc('np-mdw:editProfile', {
                                              id: Ly,
                                              name: L9,
                                              image: LL,
                                              info: LQ,
                                            }).then(function (LX) {
                                              GJ(false)
                                              Gu(LX.data.profile)
                                              GP(LX.data.licenses)
                                              Gm(LX.data.vehicles)
                                              Gt(LX.data.housing)
                                              GO(LX.data.employment)
                                              L2(LX.data.priors)
                                              L6('')
                                              Lx('')
                                              Lp('')
                                              LA('')
                                              ;(void 0 !==
                                                LX.data.profile.first_name ||
                                                (null !==
                                                  LX.data.profile.first_name &&
                                                  void 0 !==
                                                    LX.data.profile.last_name) ||
                                                null !==
                                                  LX.data.profile.last_name) &&
                                                Lx(
                                                  ''
                                                    .concat(
                                                      LX.data.profile.first_name,
                                                      ' '
                                                    )
                                                    .concat(
                                                      LX.data.profile.last_name,
                                                      ' '
                                                    )
                                                )
                                              ;(void 0 ===
                                                LX.data.profile.profilepic &&
                                                null ===
                                                  LX.data.profile.profilepic) ||
                                                Lp(LX.data.profile.profilepic)
                                              ;(void 0 === LX.data.profile.id &&
                                                null === LX.data.profile.id) ||
                                                LA(LX.data.profile.id)
                                              ;(void 0 ===
                                                LX.data.profile.information &&
                                                null ===
                                                  LX.data.profile.information) ||
                                                L6(LX.data.profile.information)
                                              Gd(false)
                                            }))
                                        },
                                        className: 'fas fa-save fa-w-14',
                                        style: {
                                          display: GA ? 'none' : '',
                                          color: '#fff',
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsx)('div', {
                          className: 'mdw-inner-content-pre-wrapper',
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                          },
                          children: Object(bS.jsxs)('div', {
                            className: Gq.mdwProfilesInnerContentMiddleBody,
                            style: { flexDirection: 'row' },
                            children: [
                              Object(bS.jsx)('div', {
                                className: Gq.mdwCreateImage,
                                children: Object(bS.jsx)('img', {
                                  alt: '',
                                  src:
                                    (GM.length > 0 && null !== GM.profilepic) ||
                                    void 0 !== GM.profilepic
                                      ? ''.concat(GM.profilepic)
                                      : 'https://i.imgur.com/wxNT3y2.jpg',
                                  style: {
                                    height: '163px',
                                    width: '185px',
                                  },
                                }),
                              }),
                              Object(bS.jsxs)('div', {
                                className: 'mdw-create-inputs',
                                style: { width: '85%' },
                                children: [
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'State ID',
                                        variant: 'standard',
                                        value: Ly,
                                        InputProps: {
                                          readOnly: true,
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-id-card fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'Name',
                                        variant: 'standard',
                                        value: L9,
                                        InputProps: {
                                          readOnly: true,
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-user fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: {
                                      marginBottom: '2.5%',
                                      display: GA ? 'none' : '',
                                    },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'Profile Image URL',
                                        variant: 'standard',
                                        value: LL,
                                        onChange: function (La) {
                                          return Lp(La.target.value)
                                        },
                                        InputProps: {
                                          readOnly: GA || 'ems' === LT,
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-clipboard fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(bS.jsx)('div', {
                          className: 'mdw-create-document',
                          style: {
                            display: GA ? 'none' : 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            color: '#fff',
                          },
                          children: Object(bS.jsx)('div', {
                            className: 'mdw-creat-document-inner-cont',
                            style: {
                              width: '97%',
                              height: '99%',
                            },
                            children: Object(bS.jsx)(bl.a, {
                              placeholder: 'Document content goes here...',
                              dark: true,
                              onChange: function (La) {
                                var LS = La()
                                LJ(LS)
                              },
                              value: L5,
                              className: Gq.checkbox,
                              disableExtensions: [
                                'code_inline',
                                'link',
                                'ordered_list',
                                'checkbox_item',
                                'checkbox_list',
                                'image',
                                'placeholder',
                                'container_notice',
                                'table',
                                'emoji',
                                'td',
                                'th',
                                'tr',
                                'hr',
                                'code_fence',
                                'code_block',
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwProfilesContentWrapperRight,
                      style: { overflowY: 'auto' },
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesLicensesContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Licenses',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)('div', {
                                    children: Object(bS.jsx)(bz.a, {
                                      title: 'Assign License',
                                      placement: 'top',
                                      sx: {
                                        backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                      },
                                      arrow: true,
                                      children: Object(bS.jsx)('i', {
                                        onClick: function () {
                                          return GT(true)
                                        },
                                        className: 'fas fa-plus fa-w-14',
                                        style: {
                                          display:
                                            void 0 === GM.id || GA || 'ems' === LT
                                              ? 'none'
                                              : '',
                                          color: '#fff',
                                        },
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: GW && GW.length > 0 ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                GW && GW.length > 0
                                  ? GW.map(function (La) {
                                      return Object(bS.jsx)(bS.Fragment, {
                                        children:
                                          GA || 'ems' === LT
                                            ? Object(bS.jsx)(bS.Fragment, {
                                                children: Object(bS.jsx)('div', {
                                                  style: {
                                                    paddingRight: '1.5%',
                                                    paddingBottom: '1.5%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: ''.concat(
                                                      La.type,
                                                      ' License'
                                                    ),
                                                    sx: {
                                                      backgroundColor: '#fff',
                                                      color: '#000',
                                                    },
                                                  }),
                                                }),
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {
                                                children: Object(bS.jsx)('div', {
                                                  style: {
                                                    paddingRight: '1.5%',
                                                    paddingBottom: '1.5%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: ''.concat(
                                                      La.type,
                                                      ' License'
                                                    ),
                                                    onDelete: function () {
                                                      return (
                                                        (LX = La.type),
                                                        void xc(
                                                          'np-mdw:removeLicense',
                                                          {
                                                            cid: Ly,
                                                            type: LX,
                                                          }
                                                        ).then(function (Lf) {
                                                          LR(Ly)
                                                        })
                                                      )
                                                      var LX
                                                    },
                                                    sx: {
                                                      backgroundColor: '#fff',
                                                      color: '#000',
                                                      '& .MuiChip-deleteIcon': {
                                                        color: '#000',
                                                      },
                                                      '& .MuiChip-deleteIcon:hover':
                                                        {
                                                          color:
                                                            'rgba(0, 0, 0, 0.5)',
                                                        },
                                                    },
                                                  }),
                                                }),
                                              }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesTagsContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Tags',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                  style: { paddingRight: '0px' },
                                  children: Object(bS.jsx)('div', {
                                    children: Object(bS.jsx)(bz.a, {
                                      title: 'Add Tag',
                                      placement: 'top',
                                      sx: {
                                        backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                      },
                                      arrow: true,
                                      children: Object(bS.jsx)('i', {
                                        className: 'fas fa-plus fa-w-14',
                                        style: {
                                          display:
                                            void 0 === GM.id || GA || 'ems' === LT
                                              ? 'none'
                                              : '',
                                          color: '#fff',
                                        },
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesVehiclesContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Vehicles',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: void 0 !== GM.id ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                Gl && Gl.length > 0
                                  ? Gl.map(function (La) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: ''
                                            .concat(La.license_plate, ' - ')
                                            .concat(La.model),
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesHousingContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Housing',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: void 0 !== GM.id ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                GN && GN.length > 0
                                  ? GN.map(function (La) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: ''
                                            .concat(La.property_name, ' (')
                                            .concat(La.property_category, ')'),
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesStorageContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Storage Access',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: void 0 !== GM.id ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                GD && GD.length > 0
                                  ? GD.map(function (La) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: ''.concat(La.storage_id),
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesEmploymentContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Employment',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: void 0 !== GM.id ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                Gi && Gi.length > 0
                                  ? Gi.map(function (La) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: ''
                                            .concat(La.business_name, ' (')
                                            .concat(La.business_role, ')'),
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwProfilesPriorsContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwProfilesInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-profiles-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Priors',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwProfilesInnerContentRightHeaderTextRight,
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwProfilesInnerContentRightBody,
                              style: {
                                display: void 0 !== GM.id ? '' : 'none',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                              children:
                                L1 && L1.length > 0
                                  ? L1.map(function (La) {
                                      return Object(bS.jsx)('div', {
                                        style: {
                                          paddingRight: '1.5%',
                                          paddingBottom: '1.5%',
                                        },
                                        children: Object(bS.jsx)(xX.a, {
                                          label: '('
                                            .concat(La.times, ') ')
                                            .concat(La.charge),
                                          sx: {
                                            backgroundColor: '#fff',
                                            color: '#000',
                                          },
                                        }),
                                      })
                                    })
                                  : Object(bS.jsx)(bS.Fragment, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          },
          bj = Object(bT.a)({
            mdwDmvOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwDmvInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwDmvInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDmvInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwDmvInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDmvInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwDmvInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwDmvInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwDmvInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwCreateImage: { marginRight: '8px' },
            mdwDmvContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwDmvLicensesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvTagsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvVehiclesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvHousingContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvHotelsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvStorageContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvEmploymentContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvPriorsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwDmvInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwDmvInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwDmvInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwDmvInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwDmvInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            checkbox: {
              '&:hover': { backgroundColor: 'transparent !important' },
            },
          }),
          bY = function () {
            var Gq = bj(),
              Gw = Object(x4.useState)(false),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(x4.useState)([]),
              GQ = Object(xx.a)(GU, 2),
              GJ = GQ[0],
              Gr = GQ[1],
              GF = Object(xz.c)(xM),
              GT = Object(xx.a)(GF, 2),
              GR = (GT[0], GT[1]),
              Ga = Object(x4.useState)({}),
              GS = Object(xx.a)(Ga, 2),
              GX = GS[0],
              Gf = GS[1],
              Go = Object(x4.useState)(''),
              Gd = Object(xx.a)(Go, 2),
              Gz = Gd[0],
              GE = Gd[1],
              GM = Object(x4.useState)(''),
              Gu = Object(xx.a)(GM, 2),
              Gg = Gu[0],
              GZ = Gu[1],
              GW = Object(x4.useState)(''),
              GP = Object(xx.a)(GW, 2),
              GV = GP[0],
              GH = GP[1],
              GK = Object(x4.useState)(''),
              GI = Object(xx.a)(GK, 2),
              Gn = GI[0],
              Gl = GI[1],
              Gm = Object(x4.useState)(''),
              Gh = Object(xx.a)(Gm, 2),
              GB = Gh[0],
              GN = Gh[1]
            return (
              Object(x4.useEffect)(function () {
                xL() || (Gf([]), GH(''), GN(''))
              }, []),
              Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsx)('div', {
                  className: Gq.mdwDmvOuterContent,
                  children: Object(bS.jsxs)('div', {
                    className: Gq.mdwDmvInnerContent,
                    children: [
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwDmvInnerContentLeft,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwDmvInnerContentLeftHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-dmv-inner-content-left-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Vehicles',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwDmvInnerContentLeftHeaderTextRight,
                                children: Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (Gt) {
                                        return (function (GC) {
                                          if ('' === GC || void 0 === GC) {
                                            return Gc(false), void Gr([])
                                          }
                                          Gr([])
                                          Gc(true)
                                          xc('np-mdw:searchVehicles', {
                                            value: GC,
                                          }).then(function (Gj) {
                                            Gc(false)
                                            Gr(Gj.data)
                                          })
                                        })(Gt.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwDmvInnerContentLeftBody,
                            children: [
                              GJ && GJ.length > 0
                                ? GJ.map(function (Gt) {
                                    return Object(bS.jsx)(bS.Fragment, {
                                      children: Object(bS.jsx)(
                                        'div',
                                        {
                                          onClick: function () {
                                            return (
                                              (GD = Gt.id),
                                              GR(true),
                                              void xc('np-mdw:loadVehicle', {
                                                value: GD,
                                              }).then(function (Gv) {
                                                Gc(false)
                                                Gf(Gv.data.vehicle)
                                                GE('')
                                                GZ('')
                                                Gl('')
                                                GH('Content goes here...')
                                                GN('Content goes here...')
                                                ;(void 0 ===
                                                  Gv.data.vehicle.license_plate &&
                                                  null ===
                                                    Gv.data.vehicle
                                                      .license_plate) ||
                                                  GE(
                                                    Gv.data.vehicle.license_plate
                                                  )
                                                ;(void 0 ===
                                                  Gv.data.vehicle.cid &&
                                                  null === Gv.data.vehicle.cid) ||
                                                  GZ(Gv.data.vehicle.cid)
                                                ;(void 0 ===
                                                  Gv.data.vehicle.vehiclepic &&
                                                  null ===
                                                    Gv.data.vehicle.vehiclepic) ||
                                                  Gl(Gv.data.vehicle.vehiclepic)
                                                ;(void 0 ===
                                                  Gv.data.vehicle.information &&
                                                  null ===
                                                    Gv.data.vehicle
                                                      .information) ||
                                                  GH(Gv.data.vehicle.information)
                                                GR(false)
                                              })
                                            )
                                            var GD
                                          },
                                          id: Gt.id,
                                          className:
                                            'component-paper cursor-pointer',
                                          style: {
                                            width: '100%',
                                            borderBottom: '0px solid #fff',
                                            borderRadius: '0px',
                                            backgroundColor: '#222831',
                                          },
                                          children: Object(bS.jsx)('div', {
                                            className: 'main-container',
                                            children: Object(bS.jsx)('div', {
                                              className: 'details',
                                              children: Object(bS.jsxs)('div', {
                                                className: 'description',
                                                children: [
                                                  Object(bS.jsx)('div', {
                                                    className: 'flex-row',
                                                    children: Object(bS.jsxs)(
                                                      bF.a,
                                                      {
                                                        style: {
                                                          color: '#fff',
                                                          wordBreak: 'break-word',
                                                        },
                                                        variant: 'body2',
                                                        gutterBottom: true,
                                                        children: [
                                                          Gt.model,
                                                          ' - ',
                                                          Gt.license_plate,
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  Object(bS.jsx)('div', {
                                                    className: 'flex-row',
                                                    children: Object(bS.jsxs)(
                                                      bF.a,
                                                      {
                                                        style: {
                                                          color: '#fff',
                                                          wordBreak: 'break-word',
                                                        },
                                                        variant: 'body2',
                                                        gutterBottom: true,
                                                        children: ['ID: ', Gt.id],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        },
                                        Gt.id
                                      ),
                                    })
                                  })
                                : Object(bS.jsx)(bS.Fragment, {}),
                              Object(bS.jsx)('div', {
                                className: 'spinner-wrapper',
                                style: {
                                  display: GA ? '' : 'none',
                                  alignItems: 'baseline',
                                  marginTop: '15%',
                                },
                                children: Object(bS.jsxs)('div', {
                                  className: 'lds-spinner',
                                  children: [
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwDmvInnerContentMiddle,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwDmvInnerContentMiddleHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-dmv-inner-content-middle-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children:
                                    void 0 !== GX.id
                                      ? 'Edit Vehicle (#'.concat(GX.id, ')')
                                      : 'Vehicle',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwDmvInnerContentMiddleHeaderTextRight,
                                style: { paddingRight: '0px' },
                                children: Object(bS.jsx)(xa.a, {
                                  direction: 'row',
                                  spacing: 1,
                                  children: Object(bS.jsx)('div', {
                                    children: Object(bS.jsx)(bz.a, {
                                      title: 'Save Vehicle',
                                      placement: 'top',
                                      sx: {
                                        backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                      },
                                      arrow: true,
                                      children: Object(bS.jsx)('i', {
                                        onClick: function () {
                                          return (
                                            GR(true),
                                            void (void 0 !== GX.id &&
                                            null !== GX.id
                                              ? xc('np-mdw:editVehicle', {
                                                  id: GX.id,
                                                  image: Gn,
                                                  info: GB,
                                                }).then(function (Gt) {
                                                  Gc(false)
                                                  Gf(Gt.data.vehicle)
                                                  GE('')
                                                  GZ('')
                                                  Gl('')
                                                  GH('Content goes here...')
                                                  GN('Content goes here...')
                                                  ;(void 0 ===
                                                    Gt.data.vehicle
                                                      .license_plate &&
                                                    null ===
                                                      Gt.data.vehicle
                                                        .license_plate) ||
                                                    GE(
                                                      Gt.data.vehicle
                                                        .license_plate
                                                    )
                                                  ;(void 0 ===
                                                    Gt.data.vehicle.cid &&
                                                    null ===
                                                      Gt.data.vehicle.cid) ||
                                                    GZ(Gt.data.vehicle.cid)
                                                  ;(void 0 ===
                                                    Gt.data.vehicle.vehiclepic &&
                                                    null ===
                                                      Gt.data.vehicle
                                                        .vehiclepic) ||
                                                    Gl(Gt.data.vehicle.vehiclepic)
                                                  ;(void 0 ===
                                                    Gt.data.vehicle.information &&
                                                    null ===
                                                      Gt.data.vehicle
                                                        .information) ||
                                                    GH(
                                                      Gt.data.vehicle.information
                                                    )
                                                  GR(false)
                                                })
                                              : GR(false))
                                          )
                                        },
                                        className: 'fas fa-save fa-w-14',
                                        style: {
                                          display: void 0 !== GX.id ? '' : 'none',
                                          color: '#fff',
                                        },
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: 'mdw-inner-content-pre-wrapper',
                            style: {
                              display: 'flex',
                              flexDirection: 'column',
                            },
                            children: Object(bS.jsxs)('div', {
                              className: Gq.mdwDmvInnerContentMiddleBody,
                              style: { flexDirection: 'row' },
                              children: [
                                Object(bS.jsx)('div', {
                                  className: Gq.mdwCreateImage,
                                  children: Object(bS.jsx)('img', {
                                    alt: '',
                                    src:
                                      (GX.length > 0 && null !== GX.vehiclepic) ||
                                      void 0 !== GX.vehiclepic
                                        ? ''.concat(GX.vehiclepic)
                                        : 'https://media.discordapp.net/attachments/925804352260685875/969132283846094868/placeholder-single.png',
                                    style: {
                                      height: '163px',
                                      width: '185px',
                                      maxHeight: '163px',
                                      maxWidth: '185px',
                                    },
                                  }),
                                }),
                                Object(bS.jsxs)('div', {
                                  className: 'mdw-create-inputs',
                                  style: { width: '85%' },
                                  children: [
                                    Object(bS.jsx)('div', {
                                      className: 'input-wrapper',
                                      style: { marginBottom: '2.5%' },
                                      children: Object(bS.jsx)(xr.a, {
                                        fullWidth: true,
                                        sx: { width: '100%' },
                                        children: Object(bS.jsx)(xF.a, {
                                          sx: {
                                            '& .MuiInput-root': {
                                              color: 'white !important',
                                            },
                                            '& label.Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                              {
                                                borderColor:
                                                  'darkgray !important',
                                              },
                                            '& .MuiInput-underline:before': {
                                              borderColor: 'darkgray !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:after': {
                                              borderColor: 'white !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .Mui-focused:after': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInputAdornment-root': {
                                              color: 'darkgray !important',
                                            },
                                          },
                                          id: 'input-with-icon-textfield',
                                          label: 'License Plate',
                                          variant: 'standard',
                                          value: Gz,
                                          InputProps: {
                                            readOnly: true,
                                            startAdornment: Object(bS.jsx)(xT.a, {
                                              position: 'start',
                                              children: Object(bS.jsx)('i', {
                                                className:
                                                  'fas fa-car fa-w-16 fa-fw',
                                              }),
                                            }),
                                          },
                                        }),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: 'input-wrapper',
                                      style: { marginBottom: '2.5%' },
                                      children: Object(bS.jsx)(xr.a, {
                                        fullWidth: true,
                                        sx: { width: '100%' },
                                        children: Object(bS.jsx)(xF.a, {
                                          sx: {
                                            '& .MuiInput-root': {
                                              color: 'white !important',
                                            },
                                            '& label.Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                              {
                                                borderColor:
                                                  'darkgray !important',
                                              },
                                            '& .MuiInput-underline:before': {
                                              borderColor: 'darkgray !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:after': {
                                              borderColor: 'white !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .Mui-focused:after': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInputAdornment-root': {
                                              color: 'darkgray !important',
                                            },
                                          },
                                          id: 'input-with-icon-textfield',
                                          label: 'State ID',
                                          variant: 'standard',
                                          value: Gg,
                                          InputProps: {
                                            readOnly: true,
                                            startAdornment: Object(bS.jsx)(xT.a, {
                                              position: 'start',
                                              children: Object(bS.jsx)('i', {
                                                className:
                                                  'fas fa-user fa-w-16 fa-fw',
                                              }),
                                            }),
                                          },
                                        }),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: 'input-wrapper',
                                      style: { marginBottom: '2.5%' },
                                      children: Object(bS.jsx)(xr.a, {
                                        fullWidth: true,
                                        sx: { width: '100%' },
                                        children: Object(bS.jsx)(xF.a, {
                                          sx: {
                                            '& .MuiInput-root': {
                                              color: 'white !important',
                                            },
                                            '& label.Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& Mui-focused': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                              {
                                                borderColor:
                                                  'darkgray !important',
                                              },
                                            '& .MuiInput-underline:before': {
                                              borderColor: 'darkgray !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInput-underline:after': {
                                              borderColor: 'white !important',
                                              color: 'darkgray !important',
                                            },
                                            '& .Mui-focused:after': {
                                              color: 'darkgray !important',
                                            },
                                            '& .MuiInputAdornment-root': {
                                              color: 'darkgray !important',
                                            },
                                          },
                                          id: 'input-with-icon-textfield',
                                          label: 'Vehicle Image URL',
                                          variant: 'standard',
                                          value: Gn,
                                          onChange: function (Gt) {
                                            return Gl(Gt.target.value)
                                          },
                                          InputProps: {
                                            readOnly: void 0 === GX.id,
                                            startAdornment: Object(bS.jsx)(xT.a, {
                                              position: 'start',
                                              children: Object(bS.jsx)('i', {
                                                className:
                                                  'fas fa-clipboard fa-w-16 fa-fw',
                                              }),
                                            }),
                                          },
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Object(bS.jsx)('div', {
                            className: 'mdw-create-document',
                            style: {
                              display: 'flex',
                              width: '100%',
                              height: '100%',
                              justifyContent: 'center',
                              color: '#fff',
                            },
                            children: Object(bS.jsx)('div', {
                              className: 'mdw-creat-document-inner-cont',
                              style: {
                                width: '97%',
                                height: '99%',
                              },
                              children: Object(bS.jsx)(bl.a, {
                                placeholder: 'Document content goes here...',
                                dark: true,
                                onChange: function (Gt) {
                                  var Gk = Gt()
                                  GN(Gk)
                                },
                                value: GV,
                                className: Gq.checkbox,
                                disableExtensions: [
                                  'code_inline',
                                  'link',
                                  'ordered_list',
                                  'checkbox_item',
                                  'checkbox_list',
                                  'image',
                                  'placeholder',
                                  'container_notice',
                                  'table',
                                  'emoji',
                                  'td',
                                  'th',
                                  'tr',
                                  'hr',
                                  'code_fence',
                                  'code_block',
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwDmvContentWrapperRight,
                        style: { overflowY: 'auto' },
                      }),
                    ],
                  }),
                }),
              })
            )
          },
          bi = Object(bT.a)({
            mdwEvidenceOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwEvidenceInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwEvidenceInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwEvidenceInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwEvidenceInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwEvidenceInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwEvidenceInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwEvidenceInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwEvidenceInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwEvidenceInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwEvidenceInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwEvidenceInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwEvidenceInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwEvidenceContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwEvidenceTagsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwEvidenceInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
          }),
          bO = function () {
            var Gq = bi(),
              Gw = Object(x4.useState)(false),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(xz.c)(xM),
              GQ = Object(xx.a)(GU, 2),
              GJ = (GQ[0], GQ[1]),
              Gr = Object(xz.c)(xh),
              GF = Object(xx.a)(Gr, 2),
              GT = GF[0],
              GR = GF[1],
              Ga = Object(xz.c)(xB),
              GS = Object(xx.a)(Ga, 2),
              GX = GS[0],
              Gf = GS[1],
              Go = Object(x4.useState)({}),
              Gd = Object(xx.a)(Go, 2),
              Gz = (Gd[0], Gd[1]),
              GE = Object(x4.useState)(0),
              GM = Object(xx.a)(GE, 2),
              Gu = GM[0],
              Gg = GM[1],
              GZ = Object(x4.useState)('other'),
              GW = Object(xx.a)(GZ, 2),
              GP = GW[0],
              GV = GW[1],
              GH = Object(x4.useState)(''),
              GK = Object(xx.a)(GH, 2),
              GI = GK[0],
              Gn = GK[1],
              Gl = Object(x4.useState)(''),
              Gm = Object(xx.a)(Gl, 2),
              Gh = Gm[0],
              GB = Gm[1],
              GN = Object(x4.useState)(''),
              Gt = Object(xx.a)(GN, 2),
              Gk = Gt[0],
              GC = Gt[1]
            return (
              Object(x4.useEffect)(function () {
                xL() ||
                  xc('np-mdw:fetchEvidence', {}).then(function (Gj) {
                    GR(Gj.data), Gf(Gj.data)
                  })
              }, []),
              Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsx)('div', {
                  className: Gq.mdwEvidenceOuterContent,
                  children: Object(bS.jsxs)('div', {
                    className: Gq.mdwEvidenceInnerContent,
                    children: [
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwEvidenceInnerContentLeft,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwEvidenceInnerContentLeftHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-evidence-inner-content-left-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Evidence',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwEvidenceInnerContentLeftHeaderTextRight,
                                children: Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (Gv) {
                                        return (function (GY) {
                                          if ((Gc(true), '' !== GY)) {
                                            var Gi = GT.filter(function (GO) {
                                              return (
                                                GO.id
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GY.toLowerCase()) ||
                                                GO.type
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GY.toLowerCase()) ||
                                                GO.identifier
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GY.toLowerCase()) ||
                                                GO.description
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GY.toLowerCase()) ||
                                                GO.cid
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GY.toLowerCase()) ||
                                                GO.incidentId
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(GY.toLowerCase())
                                              )
                                            })
                                            Gf(Gi)
                                            Gc(false)
                                          } else {
                                            Gc(false)
                                            Gf(GT)
                                          }
                                        })(Gv.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwEvidenceInnerContentLeftBody,
                            children: [
                              GX && GX.length > 0
                                ? GX.map(function (Gv) {
                                    return Object(bS.jsx)(bS.Fragment, {
                                      children: Object(bS.jsx)(
                                        'div',
                                        {
                                          onClick: function () {
                                            return (
                                              (GY = Gv.id),
                                              GJ(true),
                                              void xc('np-mdw:loadEvidence', {
                                                value: GY,
                                              }).then(function (Gi) {
                                                Gc(false)
                                                Gz(Gi.data.data)
                                                Gg(Gi.data.id)
                                                GV(Gi.data.type)
                                                Gn(Gi.data.identifier)
                                                GB(Gi.data.description)
                                                GC(Gi.data.cid)
                                                GJ(false)
                                              })
                                            )
                                            var GY
                                          },
                                          id: Gv.id,
                                          className:
                                            'component-paper cursor-pointer',
                                          style: {
                                            width: '100%',
                                            borderBottom: '0px solid #fff',
                                            borderRadius: '0px',
                                            backgroundColor: '#222831',
                                          },
                                          children: Object(bS.jsx)('div', {
                                            className: 'main-container',
                                            children: Object(bS.jsx)('div', {
                                              className: 'details',
                                              children: Object(bS.jsxs)('div', {
                                                className: 'description',
                                                children: [
                                                  Object(bS.jsx)('div', {
                                                    className: 'flex-row',
                                                    children: Object(bS.jsxs)(
                                                      bF.a,
                                                      {
                                                        style: {
                                                          color: '#fff',
                                                          wordBreak: 'break-word',
                                                        },
                                                        variant: 'body2',
                                                        gutterBottom: true,
                                                        children: [
                                                          Gv.identifier,
                                                          ' - ',
                                                          Gv.description,
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  Object(bS.jsx)('div', {
                                                    className: 'flex-row',
                                                    children: Object(bS.jsxs)(
                                                      bF.a,
                                                      {
                                                        style: {
                                                          color: '#fff',
                                                          wordBreak: 'break-word',
                                                        },
                                                        variant: 'body2',
                                                        gutterBottom: true,
                                                        children: ['ID: ', Gv.id],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        },
                                        Gv.id
                                      ),
                                    })
                                  })
                                : Object(bS.jsx)(bS.Fragment, {}),
                              Object(bS.jsx)('div', {
                                className: 'spinner-wrapper',
                                style: {
                                  display: GA ? '' : 'none',
                                  alignItems: 'baseline',
                                  marginTop: '15%',
                                },
                                children: Object(bS.jsxs)('div', {
                                  className: 'lds-spinner',
                                  children: [
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                    Object(bS.jsx)('div', {}),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwEvidenceInnerContentMiddle,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwEvidenceInnerContentMiddleHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-evidence-inner-content-middle-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children:
                                    0 !== Gu
                                      ? 'View Evidence (#'.concat(Gu, ')')
                                      : 'Submit Evidence',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwEvidenceInnerContentMiddleHeaderTextRight,
                                style: { paddingRight: '0px' },
                                children: Object(bS.jsxs)(xa.a, {
                                  direction: 'row',
                                  spacing: 1,
                                  children: [
                                    Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Submit New Evidence',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          onClick: function () {
                                            Gz([])
                                            Gg(0)
                                            GV('other')
                                            Gn('')
                                            GB('')
                                            GC('')
                                          },
                                          className: 'fas fa-file-alt fa-w-14',
                                          style: {
                                            display: 0 !== Gu ? '' : 'none',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bz.a, {
                                        title: 'Save',
                                        placement: 'top',
                                        sx: {
                                          backgroundColor:
                                            'rgba(97, 97, 97, 0.9)',
                                        },
                                        arrow: true,
                                        children: Object(bS.jsx)('i', {
                                          className: 'fas fa-save fa-w-14',
                                          style: {
                                            display: 0 !== Gu ? 'none' : '',
                                            color: '#fff',
                                          },
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: 'mdw-inner-content-pre-wrapper',
                            style: {
                              display: 'flex',
                              flexDirection: 'column',
                            },
                            children: Object(bS.jsx)('div', {
                              className: Gq.mdwEvidenceInnerContentMiddleBody,
                              style: { flexDirection: 'row' },
                              children: Object(bS.jsxs)('div', {
                                className: 'mdw-create-inputs',
                                style: { width: '100%' },
                                children: [
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(bf.Select, {
                                      label: 'Type',
                                      value: GP,
                                      items: [
                                        {
                                          id: 'other',
                                          name: 'Other',
                                        },
                                        {
                                          id: 'blood',
                                          name: 'Blood',
                                        },
                                        {
                                          id: 'casing',
                                          name: 'Casing',
                                        },
                                        {
                                          id: 'weapon',
                                          name: 'Weapon',
                                        },
                                        {
                                          id: 'photo',
                                          name: 'Photo',
                                        },
                                      ],
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'Identifier',
                                        variant: 'standard',
                                        value: GI,
                                        InputProps: {
                                          readOnly: 0 !== Gu,
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-pen fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'Description',
                                        variant: 'standard',
                                        value: Gh,
                                        InputProps: {
                                          readOnly: 0 !== Gu,
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-clipboard fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className: 'input-wrapper',
                                    style: { marginBottom: '2.5%' },
                                    children: Object(bS.jsx)(xr.a, {
                                      fullWidth: true,
                                      sx: { width: '100%' },
                                      children: Object(bS.jsx)(xF.a, {
                                        sx: {
                                          '& .MuiInput-root': {
                                            color: 'white !important',
                                          },
                                          '& label.Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& Mui-focused': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                            {
                                              borderColor: 'darkgray !important',
                                            },
                                          '& .MuiInput-underline:before': {
                                            borderColor: 'darkgray !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInput-underline:after': {
                                            borderColor: 'white !important',
                                            color: 'darkgray !important',
                                          },
                                          '& .Mui-focused:after': {
                                            color: 'darkgray !important',
                                          },
                                          '& .MuiInputAdornment-root': {
                                            color: 'darkgray !important',
                                          },
                                        },
                                        id: 'input-with-icon-textfield',
                                        label: 'CID',
                                        variant: 'standard',
                                        value: Gk,
                                        InputProps: {
                                          readOnly: 0 !== Gu,
                                          startAdornment: Object(bS.jsx)(xT.a, {
                                            position: 'start',
                                            children: Object(bS.jsx)('i', {
                                              className:
                                                'fas fa-user fa-w-16 fa-fw',
                                            }),
                                          }),
                                        },
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwEvidenceContentWrapperRight,
                        style: { overflowY: 'auto' },
                        children: Object(bS.jsxs)('div', {
                          className: Gq.mdwEvidenceTagsContentRight,
                          children: [
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwEvidenceInnerContentRightHeader,
                              style: {
                                display: 'flex',
                                width: '100%',
                                padding: '8px',
                                minHeight: '48px',
                                justifyContent: 'space-between',
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className:
                                    'mdw-evidence-inner-content-right-header-text-left',
                                  children: Object(bS.jsx)(bF.a, {
                                    style: {
                                      color: '#fff',
                                      wordBreak: 'break-word',
                                    },
                                    variant: 'h6',
                                    gutterBottom: true,
                                    children: 'Tags',
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className:
                                    Gq.mdwEvidenceInnerContentRightHeaderTextRight,
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwEvidenceInnerContentRightBody,
                              style: {
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: '0',
                                overflowY: 'unset',
                              },
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              })
            )
          },
          bs = Object(bT.a)({
            mdwPropertiesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwPropertiesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwPropertiesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwPropertiesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwPropertiesInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwPropertiesInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwPropertiesInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwPropertiesInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwPropertiesInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
          }),
          G0 = function () {
            var Gq = bs(),
              Gw = Object(xz.c)(xH),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(xz.c)(xK),
              GQ = Object(xx.a)(GU, 2),
              GJ = GQ[0],
              Gr = GQ[1]
            return (
              Object(x4.useEffect)(function () {
                xL() ||
                  xc('np-mdw:fetchProperties', {}).then(function (GT) {
                    Gc(GT.data)
                    Gr(GT.data)
                  })
              }, []),
              Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsx)('div', {
                  className: Gq.mdwPropertiesOuterContent,
                  children: Object(bS.jsxs)('div', {
                    className: Gq.mdwPropertiesInnerContent,
                    children: [
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwPropertiesInnerContentLeft,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwPropertiesInnerContentLeftHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-properties-inner-content-left-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Properties',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwPropertiesInnerContentLeftHeaderTextRight,
                                children: Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (GF) {
                                        return (function (GR) {
                                          if ('' !== GR) {
                                            var GS = GA.filter(function (Go) {
                                              return Go.name
                                                .toLowerCase()
                                                .startsWith(GR.toLowerCase())
                                            })
                                            Gr(GS)
                                          } else {
                                            Gr(GA)
                                          }
                                        })(GF.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: Gq.mdwPropertiesInnerContentLeftBody,
                            children:
                              GJ && GJ.length > 0
                                ? GJ.map(function (GF) {
                                    return Object(bS.jsx)(
                                      'div',
                                      {
                                        id: GF.id,
                                        className:
                                          'component-paper cursor-pointer',
                                        style: {
                                          width: '100%',
                                          borderBottom: '0px solid #fff',
                                          borderRadius: '0px',
                                          backgroundColor: '#222831',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'main-container',
                                          children: Object(bS.jsx)('div', {
                                            className: 'details',
                                            children: Object(bS.jsx)('div', {
                                              className: 'description',
                                              children: Object(bS.jsxs)('div', {
                                                className: 'flex-row',
                                                style: {
                                                  justifyContent: 'space-between',
                                                },
                                                children: [
                                                  Object(bS.jsx)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: GF.name,
                                                  }),
                                                  Object(bS.jsxs)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: ['ID: ', GF.id],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      GF.id
                                    )
                                  })
                                : Object(bS.jsx)(bS.Fragment, {}),
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwPropertiesInnerContentRight,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwPropertiesInnerContentRightHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-properties-inner-content-right-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Property',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-properties-inner-content-right-header-text-right',
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: Gq.mdwPropertiesInnerContentRightBody,
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsxs)('div', {
                        className: 'mdw-properties-inner-content-right',
                        style: { backgroundColor: 'transparent' },
                        children: [
                          Object(bS.jsxs)('div', {
                            className:
                              'mdw-properties-inner-content-right-header',
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-properties-inner-content-right-header-text-left',
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-properties-inner-content-right-header-text-right',
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: Gq.mdwPropertiesInnerContentRightBody,
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            )
          },
          G1 = Object(bT.a)({
            mdwChargesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
              overflow: 'auto',
            },
            mdwChargesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwChargesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwChargesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwChargesInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwChargesInnerContentRightHeaader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwChargesInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwChargesInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
          }),
          G2 = function () {
            var Gq = G1(),
              Gw = Object(xz.c)(xN),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(x4.useState)(''),
              GQ = Object(xx.a)(GU, 2),
              GJ = GQ[0],
              Gr = GQ[1]
            Object(x4.useEffect)(function () {
              xL() ||
                (Gc([]),
                xc('np-mdw:fetchCharges', {}).then(function (GX) {
                  Gc(GX.data)
                }))
            }, [])
            var GF = function (Ga) {
                return Number(Ga).toLocaleString('en-Us', {
                  style: 'currency',
                  currency: 'USD',
                })
              },
              GT = function (Ga) {
                return (
                  !GJ ||
                  Ga.toString()
                    .toLowerCase()
                    .includes(GJ.toString().toLowerCase())
                )
              },
              GR = GA.map(function (Ga) {
                return Object(x8.a)(
                  Object(x8.a)({}, Ga),
                  {},
                  {
                    charges: Ga.charges.filter(function (GS) {
                      return GT(GS.title)
                    }),
                  }
                )
              }).filter(function (Ga) {
                return Ga.charges.length
              })
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsxs)('div', {
                className: Gq.mdwChargesOuterContent,
                children: [
                  Object(bS.jsx)('div', {
                    className: Gq.mdwChargesInnerContent,
                    style: {
                      height: '17%',
                      flexDirection: 'column',
                      marginBottom: '0.2%',
                    },
                    children: Object(bS.jsxs)('div', {
                      className: Gq.mdwChargesInnerContentLeft,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwChargesInnerContentLeftHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-charges-inner-content-left-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'Charges',
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwChargesInnerContentLeftHeaderTextRight,
                              children: Object(bS.jsx)('div', {
                                className: 'input-wrapper',
                                children: Object(bS.jsx)(xr.a, {
                                  fullWidth: true,
                                  sx: { width: '100%' },
                                  children: Object(bS.jsx)(xF.a, {
                                    sx: {
                                      '& .MuiInput-root': {
                                        color: 'white !important',
                                      },
                                      '& label.Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& Mui-focused': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                        { borderColor: 'darkgray !important' },
                                      '& .MuiInput-underline:before': {
                                        borderColor: 'darkgray !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInput-underline:after': {
                                        borderColor: 'white !important',
                                        color: 'darkgray !important',
                                      },
                                      '& .Mui-focused:after': {
                                        color: 'darkgray !important',
                                      },
                                      '& .MuiInputAdornment-root': {
                                        color: 'darkgray !important',
                                      },
                                    },
                                    id: 'input-with-icon-textfield',
                                    label: 'Search',
                                    variant: 'standard',
                                    onChange: function (Ga) {
                                      return Gr(Ga.target.value)
                                    },
                                    InputProps: {
                                      startAdornment: Object(bS.jsx)(xT.a, {
                                        position: 'start',
                                        children: Object(bS.jsx)('i', {
                                          className:
                                            'fas fa-search fa-w-16 fa-fw',
                                        }),
                                      }),
                                    },
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsx)('div', {
                          className: Gq.mdwChargesInnerContentLeftBody,
                          children: Object(bS.jsx)('div', {
                            className: 'component-paper cursor-pointer',
                            style: {
                              width: '100%',
                              borderBottom: '0px solid #fff',
                              borderRadius: '0px',
                              backgroundColor: '#222831',
                              border: '1px solid #000',
                            },
                            children: Object(bS.jsx)('div', {
                              className: 'main-container',
                              children: Object(bS.jsx)('div', {
                                className: 'details',
                                children: Object(bS.jsx)('div', {
                                  className: 'description',
                                  children: Object(bS.jsx)('div', {
                                    className: 'flex-row',
                                    children: Object(bS.jsx)(bF.a, {
                                      style: {
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                      },
                                      variant: 'body2',
                                      gutterBottom: true,
                                      children:
                                        'An accomplice differs from an accessory in that an accomplice is present at the actual crime, and could be prosecuted even if the main criminal (the principal) is not charged or convicted. An accessory is generally not present at the actual crime, and may be subject to lesser penalties than an accomplice or principal.',
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                  GR && GR.length > 0
                    ? GR.map(function (Ga) {
                        return Object(bS.jsx)('div', {
                          className: Gq.mdwChargesInnerContent,
                          style: {
                            height: 'fit-content',
                            flexDirection: 'column',
                            marginBottom: '0.2%',
                          },
                          children: Object(bS.jsxs)('div', {
                            className: Gq.mdwChargesInnerContentLeft,
                            children: [
                              Object(bS.jsxs)('div', {
                                className: Gq.mdwChargesInnerContentLeftHeader,
                                children: [
                                  Object(bS.jsx)('div', {
                                    className:
                                      'mdw-charges-inner-content-left-header-text-left',
                                    children: Object(bS.jsx)(bF.a, {
                                      style: {
                                        color: '#fff',
                                        wordBreak: 'break-word',
                                      },
                                      variant: 'h6',
                                      gutterBottom: true,
                                      children: Ga.category,
                                    }),
                                  }),
                                  Object(bS.jsx)('div', {
                                    className:
                                      Gq.mdwChargesInnerContentLeftHeaderTextRight,
                                  }),
                                ],
                              }),
                              Object(bS.jsx)('div', {
                                className: Gq.mdwChargesInnerContentLeftBody,
                                style: {
                                  flexDirection: 'row',
                                  flexWrap: 'wrap',
                                  flex: '0',
                                  overflowY: 'unset',
                                  paddingLeft: '1.5%',
                                },
                                children:
                                  Ga.charges && Ga.charges.length > 0
                                    ? Ga.charges
                                        .filter(function (GS) {
                                          return GT(GS.title)
                                        })
                                        .map(function (GS) {
                                          return Object(bS.jsx)('div', {
                                            className:
                                              'component-paper cursor-pointer',
                                            style: {
                                              width: '30%',
                                              borderBottom: '0px solid #fff',
                                              borderRadius: '0px',
                                              backgroundColor: ''.concat(
                                                Ga.color
                                              ),
                                              border: '1px solid #000',
                                              marginRight: '2%',
                                              height: 'fit-content',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className: 'main-container',
                                              children: Object(bS.jsx)('div', {
                                                className: 'details',
                                                children: Object(bS.jsxs)('div', {
                                                  className: 'description',
                                                  children: [
                                                    Object(bS.jsx)('div', {
                                                      className: 'flex-row',
                                                      style: {
                                                        flexDirection: 'column',
                                                      },
                                                      children: Object(bS.jsx)(
                                                        bF.a,
                                                        {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body1',
                                                          gutterBottom: true,
                                                          children: GS.title,
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsxs)('div', {
                                                      className: 'flex-row',
                                                      style: {
                                                        flexDirection: 'row',
                                                        justifyContent:
                                                          'space-evenly',
                                                      },
                                                      children: [
                                                        Object(bS.jsxs)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: [
                                                            void 0 !== GS.months
                                                              ? GS.months
                                                              : '0',
                                                            ' months',
                                                          ],
                                                        }),
                                                        Object(bS.jsx)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children:
                                                            void 0 !== GS.fine
                                                              ? GF(GS.fine)
                                                              : '$0.0',
                                                        }),
                                                        Object(bS.jsxs)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: [
                                                            void 0 !== GS.points
                                                              ? GS.points
                                                              : '0',
                                                            ' point(s)',
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(bS.jsx)('div', {
                                                      style: {
                                                        marginTop: '1%',
                                                        marginBottom: '0.3%',
                                                      },
                                                      children: Object(bS.jsx)(
                                                        xf.a,
                                                        {
                                                          style: {
                                                            borderColor:
                                                              '#30475e',
                                                          },
                                                          variant: 'fullWidth',
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsx)('div', {
                                                      className: 'flex-row',
                                                      style: {
                                                        flexDirection: 'column',
                                                      },
                                                      children: Object(bS.jsx)(
                                                        bF.a,
                                                        {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children:
                                                            'as Accomplice',
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsxs)('div', {
                                                      className: 'flex-row',
                                                      style: {
                                                        flexDirection: 'row',
                                                        justifyContent:
                                                          'space-evenly',
                                                      },
                                                      children: [
                                                        Object(bS.jsxs)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: [
                                                            void 0 !== GS.months
                                                              ? GS.months
                                                              : '0',
                                                            ' months',
                                                          ],
                                                        }),
                                                        Object(bS.jsx)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children:
                                                            void 0 !== GS.fine
                                                              ? GF(GS.fine)
                                                              : '$0.0',
                                                        }),
                                                        Object(bS.jsxs)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: [
                                                            void 0 !== GS.points
                                                              ? GS.points
                                                              : '0',
                                                            ' point(s)',
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    Object(bS.jsx)('div', {
                                                      style: {
                                                        marginTop: '1%',
                                                        marginBottom: '0.3%',
                                                      },
                                                      children: Object(bS.jsx)(
                                                        xf.a,
                                                        {
                                                          style: {
                                                            borderColor:
                                                              '#30475e',
                                                          },
                                                          variant: 'fullWidth',
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsx)('div', {
                                                      className: 'flex-row',
                                                      style: {
                                                        flexDirection: 'column',
                                                      },
                                                      children: Object(bS.jsx)(
                                                        bF.a,
                                                        {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children:
                                                            'as Accessory',
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsxs)('div', {
                                                      className: 'flex-row',
                                                      style: {
                                                        flexDirection: 'row',
                                                        justifyContent:
                                                          'space-evenly',
                                                        marginBottom: '0.3%',
                                                      },
                                                      children: [
                                                        Object(bS.jsx)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: '0 months',
                                                        }),
                                                        Object(bS.jsx)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: '$0.00',
                                                        }),
                                                        Object(bS.jsx)(bF.a, {
                                                          style: {
                                                            color: '#fff',
                                                            wordBreak:
                                                              'break-word',
                                                            textAlign: 'center',
                                                          },
                                                          variant: 'body2',
                                                          gutterBottom: true,
                                                          children: '0 point(s)',
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          })
                                        })
                                    : Object(bS.jsx)(bS.Fragment, {}),
                              }),
                            ],
                          }),
                        })
                      })
                    : Object(bS.jsx)(bS.Fragment, {}),
                ],
              }),
            })
          },
          G3 = Object(bT.a)({
            mdwBusinessesOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwBusinessesInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwBusinessesInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwBusinessesInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwBusinessesInnerContentRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwBusinessesInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwBusinessesInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwBusinessesInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwBusinessesInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
          }),
          G4 = function () {
            var Gq = G3(),
              Gw = Object(xz.c)(xM),
              Gy = Object(xx.a)(Gw, 2),
              GA = (Gy[0], Gy[1]),
              Gc = Object(xz.c)(xI),
              GU = Object(xx.a)(Gc, 2),
              GQ = GU[0],
              GJ = GU[1],
              Gr = Object(xz.c)(xn),
              GF = Object(xx.a)(Gr, 2),
              GT = GF[0],
              GR = GF[1],
              Ga = Object(xz.c)(xl),
              GS = Object(xx.a)(Ga, 2),
              GX = GS[0],
              Gf = GS[1],
              Go = Object(x4.useState)([]),
              Gd = Object(xx.a)(Go, 2),
              Gz = Gd[0],
              GE = Gd[1],
              GM = Object(xz.c)(xm),
              Gu = Object(xx.a)(GM, 2),
              Gg = Gu[0],
              GZ = Gu[1]
            return (
              Object(x4.useEffect)(function () {
                xL() ||
                  (Gf([]),
                  GZ(0),
                  xc('np-mdw:fetchBusinesses', {}).then(function (GV) {
                    GJ(GV.data)
                    GR(GV.data)
                  }))
              }, []),
              Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsx)('div', {
                  className: Gq.mdwBusinessesOuterContent,
                  children: Object(bS.jsxs)('div', {
                    className: Gq.mdwBusinessesInnerContent,
                    children: [
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwBusinessesInnerContentLeft,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwBusinessesInnerContentLeftHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-businesses-inner-content-left-header-text-left',
                                children: Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: 'Business Directory',
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwBusinessesInnerContentLeftHeaderTextRight,
                                children: Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (GW) {
                                        return (function (GV) {
                                          if ('' !== GV) {
                                            var GH = GQ.filter(function (GK) {
                                              return (
                                                GK.business_name
                                                  .toLowerCase()
                                                  .startsWith(GV.toLowerCase()) ||
                                                GK.bank_id
                                                  .toString()
                                                  .toLowerCase()
                                                  .startsWith(
                                                    GV.toString().toLowerCase()
                                                  )
                                              )
                                            })
                                            GR(GH)
                                          } else {
                                            GR(GQ)
                                          }
                                        })(GW.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: Gq.mdwBusinessesInnerContentLeftBody,
                            children:
                              GT && GT.length > 0
                                ? GT.map(function (GW) {
                                    return Object(bS.jsx)(
                                      'div',
                                      {
                                        onClick: function () {
                                          return (
                                            (GH = GW.business_id),
                                            GA(true),
                                            void xc('np-mdw:loadBusiness', {
                                              value: GH,
                                            }).then(function (GI) {
                                              Gf(GI.data.employees),
                                                GE(GI.data.employees),
                                                GZ(GI.data.count),
                                                GA(false)
                                            })
                                          )
                                          var GH
                                        },
                                        id: GW.business_id,
                                        className:
                                          'component-paper cursor-pointer',
                                        style: {
                                          width: '100%',
                                          borderBottom: '0px solid #fff',
                                          borderRadius: '0px',
                                          backgroundColor: '#222831',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'main-container',
                                          children: Object(bS.jsx)('div', {
                                            className: 'details',
                                            children: Object(bS.jsx)('div', {
                                              className: 'description',
                                              children: Object(bS.jsxs)('div', {
                                                className: 'flex-row',
                                                style: {
                                                  justifyContent: 'space-between',
                                                },
                                                children: [
                                                  Object(bS.jsx)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: GW.business_name,
                                                  }),
                                                  Object(bS.jsxs)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'body2',
                                                    gutterBottom: true,
                                                    children: [
                                                      'Account ID: ',
                                                      GW.bank_id,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                        }),
                                      },
                                      GW.business_id
                                    )
                                  })
                                : Object(bS.jsx)(bS.Fragment, {}),
                          }),
                        ],
                      }),
                      Object(bS.jsx)('div', {
                        className: Gq.mdwInnerContentDivider,
                      }),
                      Object(bS.jsxs)('div', {
                        className: Gq.mdwBusinessesInnerContentRight,
                        children: [
                          Object(bS.jsxs)('div', {
                            className: Gq.mdwBusinessesInnerContentRightHeader,
                            children: [
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-businesses-inner-content-right-header-text-left',
                                children: Object(bS.jsxs)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'h6',
                                  gutterBottom: true,
                                  children: [
                                    'Employee List (',
                                    0 === Gg || void 0 === Gg ? '0' : Gg,
                                    ')',
                                  ],
                                }),
                              }),
                              Object(bS.jsx)('div', {
                                className:
                                  'mdw-businesses-inner-content-right-header-text-right',
                                children: Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (GW) {
                                        return (function (GP) {
                                          if ('' !== GP) {
                                            var GH = [
                                                'employee_cid',
                                                'employee_name',
                                                'employee_role',
                                              ],
                                              GK = Gz,
                                              GI = GP.toString().toLowerCase(),
                                              Gn = GK.filter(function (Gm) {
                                                return Object.keys(Gm).some(
                                                  function (Gh) {
                                                    return GH.includes(Gh)
                                                  }
                                                )
                                              }).filter(function (Gm) {
                                                return Object.values(Gm)
                                                  .map(function (Gh) {
                                                    return Gh.toString().toLocaleLowerCase()
                                                  })
                                                  .some(function (Gh) {
                                                    return Gh.startsWith(GI)
                                                  })
                                              })
                                            GE(Gn)
                                          } else {
                                            GE(GX)
                                          }
                                        })(GW.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          Object(bS.jsx)('div', {
                            className: Gq.mdwBusinessesInnerContentRightBody,
                            children:
                              Gz && Gz.length > 0
                                ? Gz.map(function (GW) {
                                    return Object(bS.jsx)(
                                      'div',
                                      {
                                        className:
                                          'component-paper cursor-pointer',
                                        style: {
                                          width: '100%',
                                          borderBottom: '0px solid #fff',
                                          borderRadius: '0px',
                                          backgroundColor: '#222831',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'main-container',
                                          children: Object(bS.jsx)('div', {
                                            className: 'details',
                                            children: Object(bS.jsxs)('div', {
                                              className: 'description',
                                              children: [
                                                Object(bS.jsxs)('div', {
                                                  className: 'flex-row',
                                                  style: {
                                                    justifyContent:
                                                      'space-between',
                                                  },
                                                  children: [
                                                    Object(bS.jsx)(bF.a, {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: GW.employee_name,
                                                    }),
                                                    Object(bS.jsxs)(bF.a, {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: [
                                                        'Role: ',
                                                        GW.employee_role,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsxs)(
                                                    bF.a,
                                                    {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: [
                                                        'State ID: ',
                                                        GW.employee_cid,
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                      GW.employee_cid
                                    )
                                  })
                                : Object(bS.jsx)(bS.Fragment, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              })
            )
          },
          G5 = function () {
            var Gq = Object(x4.useState)([]),
              Gw = Object(xx.a)(Gq, 2),
              Gy = Gw[0],
              GA = Gw[1]
            return {
              notifications: Gy,
              addNotification: function (Gc) {
                return GA(function (GQ) {
                  return [].concat(Object(x9.a)(GQ), [Gc])
                })
              },
              deleteNotification: function (Gc) {
                return GA(function (GU) {
                  return GU.filter(function (GJ) {
                    return GJ.id !== Gc
                  })
                })
              },
            }
          },
          G6 = function (Gp) {
            var Gw = Gp.deleteNotification,
              Gy = Gp.notification.id,
              GA = Object(x4.useState)(false),
              Gc = Object(xx.a)(GA, 2),
              GU = Gc[0],
              GQ = Gc[1]
            return (
              Object(x4.useEffect)(function () {
                var Gr = setTimeout(function () {
                  GQ(true)
                  setTimeout(function () {
                    Gw(Gy)
                  }, 300)
                }, 2000)
                return function () {
                  clearTimeout(Gr)
                }
              }, []),
              Object(bS.jsx)('div', {
                className: GU
                  ? 'component-paper cursor-pointer top-right-out'
                  : 'component-paper cursor-pointer top-right-in',
                style: {
                  width: '100%',
                  borderBottom: '0px solid #fff',
                  borderRadius: '0px',
                  backgroundColor: 'rgba(9, 60, 176, 0.7)',
                  borderRight: '4px solid #227ddf',
                },
                children: Object(bS.jsx)('div', {
                  className: 'main-container',
                  children: Object(bS.jsx)('div', {
                    className: 'details',
                    children: Object(bS.jsxs)('div', {
                      className: 'description',
                      children: [
                        Object(bS.jsxs)('div', {
                          className: 'flex-row',
                          children: [
                            Object(bS.jsx)('div', {
                              style: {
                                paddingRight: '1.5%',
                                paddingBottom: '1.5%',
                              },
                              children: Object(bS.jsx)(xX.a, {
                                size: 'small',
                                label: '411',
                                sx: {
                                  backgroundColor: '#a0ef7d',
                                  color: '#000',
                                },
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              style: {
                                paddingRight: '1.5%',
                                paddingBottom: '1.5%',
                              },
                              children: Object(bS.jsx)(xX.a, {
                                size: 'small',
                                label: '911',
                                sx: {
                                  backgroundColor: '#f6a968',
                                  color: '#000',
                                },
                              }),
                            }),
                            Object(bS.jsx)(bF.a, {
                              style: {
                                paddingBottom: '2%',
                                textShadow:
                                  'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                letterSpacing: '0px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                fontStyle: 'normal',
                                fontVariant: 'small-caps',
                                textTransform: 'none',
                                width: '100%',
                              },
                              variant: 'body2',
                              gutterBottom: true,
                              children: 'An incoming 911 call!',
                            }),
                            Object(bS.jsx)('i', {
                              className:
                                'fas fa-map-marker-alt fa-w-12 fa-2x fa-fw',
                              style: { color: '#fff' },
                            }),
                          ],
                        }),
                        Object(bS.jsx)('div', {
                          className: 'flex-row',
                          children: Object(bS.jsx)(bF.a, {
                            style: {
                              textShadow:
                                'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px',
                              fontFamily: 'Arial, Helvetica, sans-serif',
                              letterSpacing: '0px',
                              fontWeight: 600,
                              textDecoration: 'none',
                              fontStyle: 'normal',
                              fontVariant: 'small-caps',
                              textTransform: 'none',
                              width: '100%',
                            },
                            variant: 'body2',
                            gutterBottom: true,
                            children:
                              '4158497339 - I need medical help down at the tuner shop right now',
                          }),
                        }),
                        Object(bS.jsxs)('div', {
                          className: 'flex-row',
                          children: [
                            Object(bS.jsx)('i', {
                              className: 'fas fa-clock fa-fw',
                              style: {
                                color: '#fff',
                                fontSize: '0.875rem',
                                lineHeight: '1.43',
                                marginRight: '1.5%',
                              },
                            }),
                            Object(bS.jsx)(bF.a, {
                              style: {
                                textShadow:
                                  'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px',
                                fontFamily: 'Arial, Helvetica, sans-serif',
                                letterSpacing: '0px',
                                fontWeight: 600,
                                textDecoration: 'none',
                                fontStyle: 'normal',
                                fontVariant: 'small-caps',
                                textTransform: 'none',
                                width: '100%',
                              },
                              variant: 'body2',
                              gutterBottom: true,
                              children: 'A few seconds ago',
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              })
            )
          },
          G7 = Object(bT.a)({
            dispatchContainer: {
              top: 'unset',
              left: 'unset',
              right: '15px',
              bottom: '15px',
              position: 'absolute',
              backgroundColor: '#222832',
              width: '25vw',
              height: '30vh',
              borderTop: '2px solid #08396e',
            },
            dispatchWrapper: {
              display: 'flex',
              flexDirection: 'row',
              height: '100%',
              width: '100%',
            },
            policeWrapper: {
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              padding: '8px',
            },
            emsWrapper: {
              display: 'flex',
              flexDirection: 'column',
              width: '50%',
              padding: '8px',
            },
            unitWrapper: { height: '100%' },
            unitContainer: {
              height: '95%',
              maxHeight: '95%',
              overflow: 'hidden',
              overflowY: 'scroll',
              overflowX: 'hidden',
            },
            dispatchContainerWrap: {
              top: '20px',
              right: '30px',
              position: 'fixed',
              width: '25vw',
              height: '30vh',
            },
          }),
          G8 = function () {
            var Gq = G7(),
              Gw = G5(),
              Gy = Gw.addNotification,
              GA = Gw.deleteNotification,
              Gc = Gw.notifications,
              GU = Object(x4.useState)(0),
              GQ = Object(xx.a)(GU, 2),
              GJ = GQ[0],
              Gr = GQ[1],
              GF = Object(x4.useState)([]),
              GT = Object(xx.a)(GF, 2),
              GR = GT[0],
              Ga = GT[1],
              GS = Object(x4.useState)(''),
              GX = Object(xx.a)(GS, 2),
              Gf = GX[0],
              Go = GX[1],
              Gd = Object(x4.useState)(''),
              Gz = Object(xx.a)(Gd, 2),
              GE = Gz[0],
              GM = Gz[1],
              Gu = Object(x4.useState)([
                {
                  id: '1',
                  cid: '1',
                  callsign: '123',
                  name: 'Kevin Malagnaggi',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '2',
                  cid: '2',
                  callsign: '124',
                  name: 'Jerry Padel',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '3',
                  cid: '3',
                  callsign: '125',
                  name: 'Kevin Zarreletti',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '4',
                  cid: '4',
                  callsign: '126',
                  name: 'Terrence Cruz',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '5',
                  cid: '5',
                  callsign: '126',
                  name: 'Terrence Cruz',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '6',
                  cid: '6',
                  callsign: '126',
                  name: 'Terrence Cruz',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '7',
                  cid: '6',
                  callsign: '126',
                  name: 'Terrence Cruz',
                  vehicle: 'car',
                  icon: 'car-side',
                },
                {
                  id: '8',
                  cid: '6',
                  callsign: '126',
                  name: 'Terrence Cruz',
                  vehicle: 'car',
                  icon: 'car-side',
                },
              ]),
              Gg = Object(xx.a)(Gu, 2),
              GZ = Gg[0],
              GW = Gg[1]
            Object(x4.useEffect)(function () {
              xL() &&
                (GK(true),
                Ga(['call', 'call', 'call', 'call', 'call', 'call', 'call']))
            })
            var GP = Object(x4.useState)(false),
              GV = Object(xx.a)(GP, 2),
              GH = GV[0],
              GK = GV[1]
            xq('dispatch', function (Gi) {
              if ('addPing' === Gi.action) {
                Gy({ id: GJ })
                Gr(GJ + 1)
                var Gs = [].concat(Object(x9.a)(GR), ['call'])
                Ga(Gs)
              }
              'showDispatch' === Gi.action && GK(Gi.show)
            })
            var GI = x5.a.useState(null),
              Gn = Object(xx.a)(GI, 2),
              Gl = Gn[0],
              Gm = Gn[1],
              Gh = Boolean(Gl),
              GB = x5.a.useState(null),
              GN = Object(xx.a)(GB, 2),
              Gt = GN[0],
              Gk = GN[1],
              GC = Boolean(Gt),
              GD = function (Gi, GO, Gs) {
                Gm(Gi.currentTarget)
                Go(GO)
                GM(Gs)
              },
              Gv = function (Gi) {
                Gk(Gi.currentTarget)
              },
              Gj = function () {
                Gk(null)
              },
              GY = function (Gi) {
                Gm(null)
                var Gs = Object(x9.a)(GZ),
                  L0 = GZ.findIndex(function (L1) {
                    return L1.cid.toString() === Gf.toString()
                  })
                Gs[L0].vehicle = Gi
                'car' === Gi
                  ? (Gs[L0].icon = 'car-side')
                  : 'helicopter' === Gi
                  ? (Gs[L0].icon = 'helicopter')
                  : 'motorbike' === Gi
                  ? (Gs[L0].icon = 'motorcycle')
                  : 'bicycle' === Gi
                  ? (Gs[L0].icon = 'bicycle')
                  : 'interceptor' === Gi && (Gs[L0].icon = 'horse-head')
                GW(Gs)
              }
            return (
              xJ(GK),
              Object(bS.jsxs)(bS.Fragment, {
                children: [
                  Object(bS.jsx)('div', {
                    style: {
                      display: GH ? 'flex' : 'none',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                      zIndex: 500,
                    },
                    children: Object(bS.jsx)('div', {
                      className: 'dispatch-column-wrap',
                      style: {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        width: '44.3vh',
                        height: '70.5vh',
                        margin: 'auto',
                        marginTop: '1vh',
                        paddingBottom: '2.5vh',
                        marginRight: '1.5vh',
                        overflowY: 'scroll',
                        alignContent: 'flex-start',
                      },
                      children:
                        GR && GR.length > 0
                          ? GR.map(function (Gi, GO) {
                              return Object(bS.jsx)('div', {
                                className:
                                  'component-paper cursor-pointer top-right-in',
                                style: {
                                  position: 'unset',
                                  borderBottom: '0px solid #fff',
                                  borderRadius: '0px',
                                  backgroundColor: 'rgba(9, 60, 176, 0.7)',
                                  borderRight: '4px solid #227ddf',
                                },
                                onClick: Gv,
                                children: Object(bS.jsx)('div', {
                                  className: 'main-container',
                                  children: Object(bS.jsx)('div', {
                                    className: 'details',
                                    children: Object(bS.jsxs)('div', {
                                      className: 'description',
                                      children: [
                                        Object(bS.jsxs)('div', {
                                          className: 'flex-row',
                                          children: [
                                            Object(bS.jsx)('div', {
                                              style: {
                                                paddingRight: '1.5%',
                                                paddingBottom: '1.5%',
                                              },
                                              children: Object(bS.jsx)(xX.a, {
                                                size: 'small',
                                                label: GO,
                                                sx: {
                                                  backgroundColor: '#a0ef7d',
                                                  color: '#000',
                                                },
                                              }),
                                            }),
                                            Object(bS.jsx)('div', {
                                              style: {
                                                paddingRight: '1.5%',
                                                paddingBottom: '1.5%',
                                              },
                                              children: Object(bS.jsx)(xX.a, {
                                                size: 'small',
                                                label: '911',
                                                sx: {
                                                  backgroundColor: '#f6a968',
                                                  color: '#000',
                                                },
                                              }),
                                            }),
                                            Object(bS.jsx)(bF.a, {
                                              style: {
                                                paddingBottom: '2%',
                                                textShadow:
                                                  'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px',
                                                fontFamily:
                                                  'Arial, Helvetica, sans-serif',
                                                letterSpacing: '0px',
                                                fontWeight: 600,
                                                textDecoration: 'none',
                                                fontStyle: 'normal',
                                                fontVariant: 'small-caps',
                                                textTransform: 'none',
                                                width: '100%',
                                              },
                                              variant: 'body2',
                                              gutterBottom: true,
                                              children: 'An incoming 911 call!',
                                            }),
                                            Object(bS.jsx)('i', {
                                              onClick: function (Gs) {
                                                return Gs.stopPropagation()
                                              },
                                              className:
                                                'fas fa-map-marker-alt fa-w-12 fa-2x fa-fw',
                                              style: { color: '#fff' },
                                            }),
                                          ],
                                        }),
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              textShadow:
                                                'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px',
                                              fontFamily:
                                                'Arial, Helvetica, sans-serif',
                                              letterSpacing: '0px',
                                              fontWeight: 600,
                                              textDecoration: 'none',
                                              fontStyle: 'normal',
                                              fontVariant: 'small-caps',
                                              textTransform: 'none',
                                              width: '100%',
                                            },
                                            variant: 'body2',
                                            gutterBottom: true,
                                            children:
                                              '4158497339 - I need medical help down at the tuner shop right now',
                                          }),
                                        }),
                                        Object(bS.jsxs)('div', {
                                          className: 'flex-row',
                                          children: [
                                            Object(bS.jsx)('i', {
                                              className: 'fas fa-clock fa-fw',
                                              style: {
                                                color: '#fff',
                                                fontSize: '0.875rem',
                                                lineHeight: '1.43',
                                                marginRight: '1.5%',
                                              },
                                            }),
                                            Object(bS.jsx)(bF.a, {
                                              style: {
                                                textShadow:
                                                  'rgb(55, 71, 79) -1px 1px 0px, rgb(55, 71, 79) 1px 1px 0px, rgb(55, 71, 79) 1px -1px 0px, rgb(55, 71, 79) -1px -1px 0px',
                                                fontFamily:
                                                  'Arial, Helvetica, sans-serif',
                                                letterSpacing: '0px',
                                                fontWeight: 600,
                                                textDecoration: 'none',
                                                fontStyle: 'normal',
                                                fontVariant: 'small-caps',
                                                textTransform: 'none',
                                                width: '100%',
                                              },
                                              variant: 'body2',
                                              gutterBottom: true,
                                              children: 'A few seconds ago',
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              })
                            })
                          : Object(bS.jsx)(bS.Fragment, {}),
                    }),
                  }),
                  Object(bS.jsxs)(bE.a, {
                    id: 'fade-menu',
                    MenuListProps: { 'aria-labelledby': 'fade-button' },
                    anchorEl: Gt,
                    open: GC,
                    onClose: Gj,
                    children: [
                      Object(bS.jsx)(xR.a, {
                        onClick: function () {
                          return Gj()
                        },
                        children: 'Set GPS Location',
                      }),
                      Object(bS.jsx)(xR.a, {
                        onClick: function () {
                          return Gj()
                        },
                        children: 'Create Call',
                      }),
                      Object(bS.jsx)(xR.a, {
                        onClick: function () {
                          return Gj()
                        },
                        children: 'Dismiss Ping (From Map/List)',
                      }),
                    ],
                  }),
                  Object(bS.jsx)('div', {
                    className: 'top-right-in',
                    style: {
                      position: 'fixed',
                      boxSizing: 'border-box',
                    },
                    children: Object(bS.jsx)('div', {
                      className: 'column-wrap top-right-in',
                      style: {
                        display: Gc.length > 0 && !GH ? 'flex' : 'none',
                        flexDirection: 'column-reverse',
                      },
                      children: Gc.map(function (Gi) {
                        return Object(bS.jsx)(
                          G6,
                          {
                            deleteNotification: GA,
                            notification: Gi,
                          },
                          Gi.id
                        )
                      }),
                    }),
                  }),
                  Object(bS.jsxs)('div', {
                    className: Gq.dispatchContainer,
                    style: {
                      display: GH ? '' : 'none',
                      zIndex: 1000,
                    },
                    children: [
                      Object(bS.jsxs)('div', {
                        className: Gq.dispatchWrapper,
                        children: [
                          Object(bS.jsx)('div', {
                            className: Gq.policeWrapper,
                            children: Object(bS.jsxs)('div', {
                              className: Gq.unitWrapper,
                              children: [
                                Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'body1',
                                  children: 'Police',
                                }),
                                Object(bS.jsx)('div', {
                                  className: Gq.unitContainer,
                                  children:
                                    GZ && GZ.length > 0
                                      ? GZ.map(function (Gi, GO) {
                                          return Object(bS.jsx)('div', {
                                            className:
                                              'component-dispatch cursor-pointer',
                                            onClick: function (L0) {
                                              return GD(L0, Gi.cid, Gi.vehicle)
                                            },
                                            children: Object(bS.jsxs)('div', {
                                              className: 'main-container',
                                              children: [
                                                Object(bS.jsx)('div', {
                                                  className: 'image',
                                                  children: Object(bS.jsx)('i', {
                                                    className: 'fas fa-'.concat(
                                                      Gi.icon,
                                                      ' fa-w-14 fa-fw fa-lg'
                                                    ),
                                                  }),
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className: 'details',
                                                  children: Object(bS.jsx)(
                                                    'div',
                                                    {
                                                      className: 'title',
                                                      children: Object(bS.jsx)(
                                                        xX.a,
                                                        {
                                                          size: 'small',
                                                          label: ''
                                                            .concat(
                                                              Gi.callsign,
                                                              ' - '
                                                            )
                                                            .concat(Gi.name),
                                                          sx: {
                                                            backgroundColor:
                                                              '#95ef77',
                                                            color: '#000',
                                                          },
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className: 'actions',
                                                }),
                                              ],
                                            }),
                                          })
                                        })
                                      : Object(bS.jsx)(bS.Fragment, {}),
                                }),
                              ],
                            }),
                          }),
                          Object(bS.jsx)('div', {
                            className: Gq.emsWrapper,
                            children: Object(bS.jsxs)('div', {
                              className: Gq.unitWrapper,
                              children: [
                                Object(bS.jsx)(bF.a, {
                                  style: {
                                    color: '#fff',
                                    wordBreak: 'break-word',
                                  },
                                  variant: 'body1',
                                  children: 'EMS',
                                }),
                                Object(bS.jsx)('div', {
                                  className: Gq.unitContainer,
                                  children: Object(bS.jsx)('div', {
                                    className:
                                      'component-dispatch cursor-pointer',
                                    onClick: function (Gi) {
                                      return GD(Gi, '1', 'car')
                                    },
                                    children: Object(bS.jsxs)('div', {
                                      className: 'main-container',
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className: 'image',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-car-side fa-w-14 fa-fw fa-lg',
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          className: 'details',
                                          children: Object(bS.jsx)('div', {
                                            className: 'title',
                                            children: Object(bS.jsx)(xX.a, {
                                              size: 'small',
                                              label: 'E-921 - Frank Sotela',
                                              sx: {
                                                backgroundColor: '#95ef77',
                                                color: '#000',
                                              },
                                            }),
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          className: 'actions',
                                        }),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(bS.jsxs)(bE.a, {
                        id: 'fade-menu',
                        MenuListProps: { 'aria-labelledby': 'fade-button' },
                        anchorEl: Gl,
                        open: Gh,
                        onClose: function () {
                          Gm(null)
                        },
                        children: [
                          Object(bS.jsx)(xR.a, {
                            sx: { display: 'car' !== GE ? '' : 'none' },
                            onClick: function () {
                              return GY('car')
                            },
                            children: 'Vehicle: Car',
                          }),
                          Object(bS.jsx)(xR.a, {
                            sx: { display: 'helicopter' !== GE ? '' : 'none' },
                            onClick: function () {
                              return GY('helicopter')
                            },
                            children: 'Vehicle: Helicopter',
                          }),
                          Object(bS.jsx)(xR.a, {
                            sx: { display: 'motorbike' !== GE ? '' : 'none' },
                            onClick: function () {
                              return GY('motorbike')
                            },
                            children: 'Vehicle: Motorbike',
                          }),
                          Object(bS.jsx)(xR.a, {
                            sx: { display: 'bicycle' !== GE ? '' : 'none' },
                            onClick: function () {
                              return GY('bicycle')
                            },
                            children: 'Vehicle: Bicycle',
                          }),
                          Object(bS.jsx)(xR.a, {
                            sx: { display: 'interceptor' !== GE ? '' : 'none' },
                            onClick: function () {
                              return GY('interceptor')
                            },
                            children: 'Vehicle: Interceptor',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            )
          },
          G9 = x2(810),
          Gx = Object(bT.a)({
            mdwStaffOuterContent: {
              width: '90%',
              height: '100%',
              padding: '8px',
            },
            mdwStaffInnerContent: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
            mdwStaffInnerContentLeft: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwStaffInnerContentLeftHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwStaffInnerContentMiddle: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwStaffInnerContentMiddleHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwStaffInnerContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
            },
            mdwStaffInnerContentRightHeader: {
              width: '100%',
              display: 'flex',
              padding: '8px',
              minHeight: '48px',
              justifyContent: 'space-between',
            },
            mdwStaffInnerContentRightHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwCreateImage: { marginRight: '8px' },
            mdwStaffContentWrapperRight: {
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            },
            mdwStaffLicensesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffTagsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffVehiclesContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffHousingContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffHotelsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffStorageContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffEmploymentContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffPriorsContentRight: {
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(30, 58, 86)',
              marginBottom: '1.5%',
            },
            mdwStaffInnerContentLeftHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwStaffInnerContentLeftBody: {
              flex: '1 1 0%',
              width: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwInnerContentDivider: { width: '16px' },
            mdwStaffInnerContentMiddleHeaderTextRight: {
              maxWidth: '40%',
              paddingRight: '8px',
            },
            mdwStaffInnerContentMiddleBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            mdwStaffInnerContentRightBody: {
              flex: '1 1 0%',
              width: '100%',
              height: '100%',
              display: 'flex',
              padding: '8px',
              maxHeight: '100%',
              overflowY: 'auto',
              flexDirection: 'column',
            },
            checkbox: {
              '&:hover': { backgroundColor: 'transparent !important' },
            },
          }),
          Gb = function () {
            var Gq = Gx(),
              Gw = Object(x4.useState)(false),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(xz.c)(xM),
              GQ = Object(xx.a)(GU, 2),
              GJ = (GQ[0], GQ[1]),
              Gr = Object(xz.c)(xD),
              GF = Object(xx.a)(Gr, 2),
              GT = GF[0],
              GR = GF[1],
              Ga = Object(xz.c)(xv),
              GS = Object(xx.a)(Ga, 2),
              GX = GS[0],
              Gf = GS[1],
              Go = Object(xz.c)(xZ),
              Gd = Object(xx.a)(Go, 2),
              Gz = (Gd[0], Gd[1]),
              GE = Object(x4.useState)([]),
              GM = Object(xx.a)(GE, 2),
              Gu = GM[0],
              Gg = GM[1],
              GZ = Object(x4.useState)(''),
              GW = Object(xx.a)(GZ, 2),
              GP = GW[0],
              GV = GW[1],
              GH = Object(x4.useState)(''),
              GK = Object(xx.a)(GH, 2),
              GI = GK[0],
              Gn = GK[1],
              Gl = Object(x4.useState)(''),
              Gm = Object(xx.a)(Gl, 2),
              Gh = Gm[0],
              GB = Gm[1],
              GN = Object(x4.useState)(''),
              Gt = Object(xx.a)(GN, 2),
              Gk = Gt[0],
              GC = Gt[1],
              GD = Object(x4.useState)(''),
              Gv = Object(xx.a)(GD, 2),
              Gj = Gv[0],
              GY = Gv[1],
              Gi = x5.a.useState(null),
              GO = Object(xx.a)(Gi, 2),
              Gs = GO[0],
              L0 = GO[1],
              L1 = Boolean(Gs)
            Object(x4.useEffect)(function () {
              xL() ||
                xc('np-mdw:fetchStaff', {}).then(function (L5) {
                  GR(L5.data)
                  Gf(L5.data)
                })
            }, [])
            var L2 = function (L4, L5) {
              var L7
              'click' === L4.type
                ? ((L7 = L5),
                  GJ(true),
                  xc('np-mdw:loadStaff', { value: L7 }).then(function (L8) {
                    Gc(false)
                    Gg(L8.data.staff)
                    GV('')
                    Gn('')
                    GB('')
                    GC('1')
                    ;(void 0 === L8.data.staff.name &&
                      null === L8.data.staff.name) ||
                      GV(L8.data.staff.name)
                    ;(void 0 === L8.data.staff.cid &&
                      null === L8.data.staff.cid) ||
                      Gn(L8.data.staff.cid)
                    ;(void 0 === L8.data.staff.callsign &&
                      null === L8.data.staff.callsign) ||
                      GB(L8.data.staff.callsign)
                    ;(void 0 === L8.data.staff.rank &&
                      null === L8.data.staff.rank) ||
                      GC(L8.data.staff.rank)
                    GJ(false)
                  }))
                : 'contextmenu' === L4.type && (L0(L4.currentTarget), GY(L5))
            }
            return Object(bS.jsx)(bS.Fragment, {
              children: Object(bS.jsx)('div', {
                className: Gq.mdwStaffOuterContent,
                children: Object(bS.jsxs)('div', {
                  className: Gq.mdwStaffInnerContent,
                  children: [
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwStaffInnerContentLeft,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwStaffInnerContentLeftHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-staff-inner-content-left-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children: 'Staff',
                              }),
                            }),
                            Object(bS.jsxs)('div', {
                              className:
                                Gq.mdwStaffInnerContentLeftHeaderTextRight,
                              children: [
                                Object(bS.jsx)('div', {
                                  style: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                  },
                                  children: Object(bS.jsx)(bz.a, {
                                    title: 'Hire',
                                    placement: 'top',
                                    sx: {
                                      backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                    },
                                    arrow: true,
                                    children: Object(bS.jsx)('i', {
                                      onClick: function () {
                                        return Gz(true)
                                      },
                                      className: 'fas fa-plus fa-w-14',
                                      style: { color: '#fff' },
                                    }),
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Search',
                                      variant: 'standard',
                                      onChange: function (L4) {
                                        return (function (L7) {
                                          if ('' !== L7) {
                                            var L9 = GT.filter(function (Lx) {
                                              var Lb, LG, LL
                                              return (
                                                (null === (Lb = Lx.cid) ||
                                                void 0 === Lb
                                                  ? void 0
                                                  : Lb.toString()
                                                      .toLowerCase()
                                                      .startsWith(
                                                        L7.toLowerCase()
                                                      )) ||
                                                (null === (LG = Lx.name) ||
                                                void 0 === LG
                                                  ? void 0
                                                  : LG.toString()
                                                      .toLowerCase()
                                                      .startsWith(
                                                        L7.toLowerCase()
                                                      )) ||
                                                (null === (LL = Lx.callsign) ||
                                                void 0 === LL
                                                  ? void 0
                                                  : LL.toString()
                                                      .toLowerCase()
                                                      .startsWith(
                                                        L7.toLowerCase()
                                                      ))
                                              )
                                            })
                                            Gf(L9)
                                          } else {
                                            Gf(GT)
                                          }
                                        })(L4.target.value)
                                      },
                                      InputProps: {
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-search fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwStaffInnerContentLeftBody,
                          children: [
                            Object(bS.jsx)(bE.a, {
                              id: 'fade-menu',
                              MenuListProps: { 'aria-labelledby': 'fade-button' },
                              anchorEl: Gs,
                              open: L1,
                              onClose: function () {
                                L0(null)
                                GY('')
                              },
                              children: Object(bS.jsxs)(xR.a, {
                                onClick: function () {
                                  return (
                                    L0(null),
                                    GJ(true),
                                    void xc('np-mdw:fireStaff', {
                                      cid: Gj,
                                    }).then(function (L6) {
                                      GR(L6.data), Gf(L6.data), GY(''), GJ(false)
                                    })
                                  )
                                },
                                children: [
                                  Object(bS.jsx)(bM.a, {
                                    children: Object(bS.jsx)('i', {
                                      className: 'fas fa-times',
                                    }),
                                  }),
                                  Object(bS.jsx)(bF.a, {
                                    variant: 'inherit',
                                    style: { color: '#fff' },
                                    children: 'Fire',
                                  }),
                                ],
                              }),
                            }),
                            GX && GX.length > 0
                              ? GX.map(function (L4) {
                                  return Object(bS.jsx)(bS.Fragment, {
                                    children: Object(bS.jsx)(
                                      'div',
                                      {
                                        onClick: function (L7) {
                                          return L2(L7, L4.cid)
                                        },
                                        onContextMenu: function (L7) {
                                          return L2(L7, L4.cid)
                                        },
                                        id: L4.id,
                                        className:
                                          'component-paper cursor-pointer',
                                        style: {
                                          width: '100%',
                                          borderBottom: '0px solid #fff',
                                          borderRadius: '0px',
                                          backgroundColor: '#222831',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'main-container',
                                          children: Object(bS.jsx)('div', {
                                            className: 'details',
                                            children: Object(bS.jsxs)('div', {
                                              className: 'description',
                                              children: [
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsxs)(
                                                    bF.a,
                                                    {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: [
                                                        '(',
                                                        L4.callsign,
                                                        ') ',
                                                        L4.name,
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className: 'flex-row',
                                                  children: Object(bS.jsxs)(
                                                    bF.a,
                                                    {
                                                      style: {
                                                        color: '#fff',
                                                        wordBreak: 'break-word',
                                                      },
                                                      variant: 'body2',
                                                      gutterBottom: true,
                                                      children: [
                                                        'State ID: ',
                                                        L4.cid,
                                                      ],
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      },
                                      L4.id
                                    ),
                                  })
                                })
                              : Object(bS.jsx)(bS.Fragment, {}),
                            Object(bS.jsx)('div', {
                              className: 'spinner-wrapper',
                              style: {
                                display: GA ? '' : 'none',
                                alignItems: 'baseline',
                                marginTop: '15%',
                              },
                              children: Object(bS.jsxs)('div', {
                                className: 'lds-spinner',
                                children: [
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                  Object(bS.jsx)('div', {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsxs)('div', {
                      className: Gq.mdwStaffInnerContentMiddle,
                      children: [
                        Object(bS.jsxs)('div', {
                          className: Gq.mdwStaffInnerContentMiddleHeader,
                          children: [
                            Object(bS.jsx)('div', {
                              className:
                                'mdw-staff-inner-content-middle-header-text-left',
                              children: Object(bS.jsx)(bF.a, {
                                style: {
                                  color: '#fff',
                                  wordBreak: 'break-word',
                                },
                                variant: 'h6',
                                gutterBottom: true,
                                children:
                                  void 0 !== Gu.id
                                    ? 'Edit Staff (#'.concat(Gu.id, ')')
                                    : 'Staff',
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className:
                                Gq.mdwStaffInnerContentMiddleHeaderTextRight,
                              style: { paddingRight: '0px' },
                              children: Object(bS.jsx)(xa.a, {
                                direction: 'row',
                                spacing: 1,
                                children: Object(bS.jsx)('div', {
                                  children: Object(bS.jsx)(bz.a, {
                                    title: 'Save Staff',
                                    placement: 'top',
                                    sx: {
                                      backgroundColor: 'rgba(97, 97, 97, 0.9)',
                                    },
                                    arrow: true,
                                    children: Object(bS.jsx)('i', {
                                      onClick: function () {
                                        return (
                                          GJ(true),
                                          void (void 0 !== Gu.id && null !== Gu.id
                                            ? xc('np-mdw:editStaff', {
                                                id: Gu.cid,
                                                callsign: Gh,
                                                rank: Gk,
                                              }).then(function (L5) {
                                                Gc(false)
                                                Gg(L5.data.staff)
                                                GV('')
                                                Gn('')
                                                GB('')
                                                GC('1')
                                                ;(void 0 === L5.data.staff.name &&
                                                  null === L5.data.staff.name) ||
                                                  GV(L5.data.staff.name)
                                                ;(void 0 === L5.data.staff.cid &&
                                                  null === L5.data.staff.cid) ||
                                                  Gn(L5.data.staff.cid)
                                                ;(void 0 ===
                                                  L5.data.staff.callsign &&
                                                  null ===
                                                    L5.data.staff.callsign) ||
                                                  GB(L5.data.staff.callsign)
                                                ;(void 0 === L5.data.staff.rank &&
                                                  null === L5.data.staff.rank) ||
                                                  GC(L5.data.staff.rank)
                                                GJ(false)
                                              })
                                            : GJ(false))
                                        )
                                      },
                                      className: 'fas fa-save fa-w-14',
                                      style: {
                                        display: void 0 !== Gu.id ? '' : 'none',
                                        color: '#fff',
                                      },
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        Object(bS.jsx)('div', {
                          className: 'mdw-inner-content-pre-wrapper',
                          style: {
                            display: 'flex',
                            flexDirection: 'column',
                          },
                          children: Object(bS.jsx)('div', {
                            className: Gq.mdwStaffInnerContentMiddleBody,
                            style: { flexDirection: 'row' },
                            children: Object(bS.jsxs)('div', {
                              className: 'mdw-create-inputs',
                              style: { width: '100%' },
                              children: [
                                Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  style: { marginBottom: '2.5%' },
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Name',
                                      variant: 'standard',
                                      value: GP,
                                      InputProps: {
                                        readOnly: true,
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-user fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  style: { marginBottom: '2.5%' },
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'State ID',
                                      variant: 'standard',
                                      value: GI,
                                      InputProps: {
                                        readOnly: true,
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-id-card fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  style: { marginBottom: '2.5%' },
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsx)(xF.a, {
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      id: 'input-with-icon-textfield',
                                      label: 'Callsign',
                                      variant: 'standard',
                                      value: Gh,
                                      onChange: function (L4) {
                                        return GB(L4.target.value)
                                      },
                                      InputProps: {
                                        readOnly: void 0 === GT.id,
                                        startAdornment: Object(bS.jsx)(xT.a, {
                                          position: 'start',
                                          children: Object(bS.jsx)('i', {
                                            className:
                                              'fas fa-clipboard fa-w-16 fa-fw',
                                          }),
                                        }),
                                      },
                                    }),
                                  }),
                                }),
                                Object(bS.jsx)('div', {
                                  className: 'input-wrapper',
                                  style: { marginBottom: '2.5%' },
                                  children: Object(bS.jsx)(xr.a, {
                                    fullWidth: true,
                                    sx: { width: '100%' },
                                    children: Object(bS.jsxs)(xF.a, {
                                      id: 'outlined-select-currency',
                                      variant: 'standard',
                                      select: true,
                                      label: 'Rank',
                                      value: Gk,
                                      onChange: function (L4) {
                                        return GC(L4.target.value)
                                      },
                                      sx: {
                                        '& .MuiInput-root': {
                                          color: 'white !important',
                                        },
                                        '& label.Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& Mui-focused': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                          { borderColor: 'darkgray !important' },
                                        '& .MuiInput-underline:before': {
                                          borderColor: 'darkgray !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInput-underline:after': {
                                          borderColor: 'white !important',
                                          color: 'darkgray !important',
                                        },
                                        '& .Mui-focused:after': {
                                          color: 'darkgray !important',
                                        },
                                        '& .MuiInputAdornment-root': {
                                          color: 'darkgray !important',
                                        },
                                      },
                                      children: [
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '1',
                                            children: 'Cadet',
                                          },
                                          '1'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '2',
                                            children: 'Officer',
                                          },
                                          '2'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '3',
                                            children: 'Senior Officer',
                                          },
                                          '3'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '4',
                                            children: 'Corporal',
                                          },
                                          '4'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '5',
                                            children: 'Sergeant',
                                          },
                                          '5'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '6',
                                            children: 'Lieutenant',
                                          },
                                          '6'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '7',
                                            children: 'Captain',
                                          },
                                          '7'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '8',
                                            children: 'Deputy Chief Of Police',
                                          },
                                          '8'
                                        ),
                                        Object(bS.jsx)(
                                          xR.a,
                                          {
                                            value: '9',
                                            children: 'Chief Of Police',
                                          },
                                          '9'
                                        ),
                                      ],
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwInnerContentDivider,
                    }),
                    Object(bS.jsx)('div', {
                      className: Gq.mdwStaffContentWrapperRight,
                      style: { overflowY: 'auto' },
                    }),
                  ],
                }),
              }),
            })
          },
          GG = Object(xb.a)({
            components: {
              MuiTypography: { styleOverrides: { root: { margin: '0' } } },
              MuiMenuItem: {
                styleOverrides: {
                  root: {
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      '&.Mui-focusVisible': { background: 'rgba(0, 0, 0, 0.3)' },
                    },
                    '&.Mui-selected:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    },
                  },
                },
              },
              MuiCircularProgress: {
                styleOverrides: { circle: { strokeLinecap: 'butt' } },
              },
              MuiInput: {
                styleOverrides: {
                  root: {
                    '& .MuiInput-root': {
                      color: 'white !important',
                      fontSize: '1.3vmin !important',
                    },
                    '& label.Mui-focused': { color: 'darkgray !important' },
                    '& Mui-focused': { color: 'darkgray !important' },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderColor: 'darkgray !important',
                    },
                    '& .MuiInput-underline:before': {
                      borderColor: 'darkgray !important',
                      color: 'darkgray !important',
                    },
                    '& .MuiInput-underline:after': {
                      borderColor: 'white !important',
                      color: 'darkgray !important',
                    },
                    '& .Mui-focused:after': {
                      color: 'darkgray !important',
                      fontSize: '1.5vmin !important',
                    },
                    '& .MuiInputAdornment-root': { color: 'darkgray !important' },
                  },
                },
              },
              MuiTooltip: {
                styleOverrides: {
                  tooltip: {
                    fontSize: '1em',
                    maxWidth: '1000px',
                  },
                },
              },
            },
            palette: {
              mode: 'dark',
              primary: { main: '#95ef77' },
              secondary: { main: '#424cab' },
              success: { main: '#95ef77' },
              warning: { main: '#f2a365' },
              error: { main: '#ffffff' },
              info: { main: '#2d465b' },
            },
          }),
          GL = function () {
            var Gq = bR(),
              Gw = Object(x4.useState)(false),
              Gy = Object(xx.a)(Gw, 2),
              GA = Gy[0],
              Gc = Gy[1],
              GU = Object(xo.f)(),
              GQ = Object(xz.c)(xj),
              GJ = Object(xx.a)(GQ, 2),
              GF = GJ[0],
              GT = GJ[1],
              GR = Object(xz.c)(xY),
              Ga = Object(xx.a)(GR, 2),
              GS = Ga[0],
              GX = Ga[1],
              Gf = Object(xz.c)(xi),
              Go = Object(xx.a)(Gf, 2),
              Gd = Go[0],
              Gz = Go[1],
              GE = Object(xz.c)(xO),
              GM = Object(xx.a)(GE, 2),
              Gu = GM[0],
              Gg = GM[1],
              GZ = Object(xz.c)(xs),
              GW = Object(xx.a)(GZ, 2),
              GP = (GW[0], GW[1]),
              GV = Object(xz.c)(xE),
              GH = Object(xx.a)(GV, 2),
              GK = GH[0],
              GI = GH[1],
              Gl = Object(x4.useState)(1),
              Gm = Object(xx.a)(Gl, 2),
              Gh = Gm[0],
              GB = Gm[1],
              GN = Object(x4.useState)([]),
              Gk = Object(xx.a)(GN, 2),
              GC = (Gk[0], Gk[1]),
              GD = Object(xz.c)(xh),
              Gv = Object(xx.a)(GD, 2),
              Gj = (Gv[0], Gv[1]),
              GY = Object(xz.c)(xB),
              GO = Object(xx.a)(GY, 2),
              Gs = (GO[0], GO[1]),
              L0 = Object(x4.useState)([]),
              L1 = Object(xx.a)(L0, 2),
              L2 = L1[0],
              L3 = L1[1],
              L4 = Object(x4.useState)([]),
              L5 = Object(xx.a)(L4, 2),
              L6 = L5[0],
              L7 = L5[1],
              L8 = Object(xz.c)(xW),
              L9 = Object(xx.a)(L8, 2),
              Lx = (L9[0], L9[1]),
              Lb = Object(xz.c)(xI),
              LG = Object(xx.a)(Lb, 2),
              LL = (LG[0], LG[1]),
              Lp = Object(xz.c)(xn),
              Lq = Object(xx.a)(Lp, 2),
              Lw = (Lq[0], Lq[1]),
              Ly = Object(xz.c)(xH),
              LA = Object(xx.a)(Ly, 2),
              Lc = (LA[0], LA[1]),
              LU = Object(xz.c)(xK),
              LQ = Object(xx.a)(LU, 2),
              LJ = (LQ[0], LQ[1]),
              LF = Object(xz.c)(b0),
              LT = Object(xx.a)(LF, 2),
              LR = (LT[0], LT[1]),
              La = Object(xz.c)(b1),
              LS = Object(xx.a)(La, 2),
              LX = (LS[0], LS[1]),
              Lf = Object(xz.c)(bb),
              Lo = Object(xx.a)(Lf, 2),
              Ld = Lo[0],
              Lz = Lo[1],
              LE = Object(xz.c)(bG),
              LM = Object(xx.a)(LE, 2),
              Lu = LM[0],
              Lg = LM[1],
              LZ = Object(xz.c)(bL),
              LW = Object(xx.a)(LZ, 2),
              LP = LW[0],
              LV = LW[1],
              LH = Object(xz.c)(bp),
              LK = Object(xx.a)(LH, 2),
              LI = LK[0],
              Ll = LK[1],
              Lm = Object(xz.c)(bx),
              Lh = Object(xx.a)(Lm, 2),
              LB = Lh[0],
              LN = Lh[1],
              Lk = Object(xz.c)(xl),
              LC = Object(xx.a)(Lk, 2),
              LD = (LC[0], LC[1]),
              Lv = Object(xz.c)(xN),
              Lj = Object(xx.a)(Lv, 2),
              LY = Lj[0],
              LO = Lj[1],
              Ls = Object(xz.c)(xP),
              p0 = Object(xx.a)(Ls, 2),
              p1 = p0[0],
              p2 = (p0[1], Object(xz.c)(bJ)),
              p3 = Object(xx.a)(p2, 2),
              p4 = p3[0],
              p5 = (p3[1], Object(xz.c)(b4)),
              p6 = Object(xx.a)(p5, 2),
              p7 = p6[0],
              p8 = (p6[1], Object(xz.c)(b5)),
              p9 = Object(xx.a)(p8, 2),
              px = p9[0],
              pb = p9[1],
              pG = Object(xz.c)(b6),
              pL = Object(xx.a)(pG, 2),
              pp = pL[0],
              pq = pL[1],
              pw = Object(xz.c)(b7),
              py = Object(xx.a)(pw, 2),
              pA = py[0],
              pc = py[1],
              pU = Object(xz.c)(b8),
              pQ = Object(xx.a)(pU, 2),
              pJ = pQ[0],
              pF = pQ[1],
              pT = Object(xz.c)(b9),
              pR = Object(xx.a)(pT, 2),
              pa = pR[0],
              pS = pR[1],
              pX = Object(x4.useState)(false),
              pf = Object(xx.a)(pX, 2),
              po = (pf[0], pf[1]),
              pd = Object(xz.c)(xM),
              pz = Object(xx.a)(pd, 2),
              pE = pz[0],
              pM = pz[1],
              pu = Object(xz.c)(bq),
              pg = Object(xx.a)(pu, 2),
              pZ = pg[0],
              pW = pg[1],
              pP = Object(xz.c)(bw),
              pV = Object(xx.a)(pP, 2),
              pH = pV[0],
              pK = pV[1],
              pI = Object(xz.c)(by),
              pl = Object(xx.a)(pI, 2),
              pm = pl[0],
              ph = pl[1],
              pB = Object(xz.c)(bA),
              pN = Object(xx.a)(pB, 2),
              pk = pN[0],
              pC = pN[1],
              pD = Object(xz.c)(bc),
              pv = Object(xx.a)(pD, 2),
              pj = pv[0],
              pY = pv[1],
              pO = Object(xz.c)(bU),
              ps = Object(xx.a)(pO, 2),
              q0 = ps[0],
              q1 = ps[1],
              q2 = Object(xz.c)(bQ),
              q3 = Object(xx.a)(q2, 2),
              q4 = q3[0],
              q5 = q3[1],
              q6 = Object(xz.c)(xu),
              q7 = Object(xx.a)(q6, 2),
              q8 = q7[0],
              q9 = q7[1],
              qx = Object(xz.c)(xg),
              qb = Object(xx.a)(qx, 2),
              qG = qb[0],
              qL = qb[1],
              qp = Object(xz.c)(xZ),
              qq = Object(xx.a)(qp, 2),
              qw = qq[0],
              qy = qq[1],
              qA = Object(x4.useState)(false),
              qc = Object(xx.a)(qA, 2),
              qU = qc[0],
              qQ = qc[1],
              qJ = Object(x4.useState)(''),
              qF = Object(xx.a)(qJ, 2),
              qT = qF[0],
              qR = qF[1],
              qa = Object(x4.useState)(''),
              qS = Object(xx.a)(qa, 2),
              qX = qS[0],
              qf = qS[1],
              qo = Object(x4.useState)(''),
              qd = Object(xx.a)(qo, 2),
              qz = qd[0],
              qE = qd[1],
              qM = Object(x4.useState)(''),
              qu = Object(xx.a)(qM, 2),
              qg = qu[0],
              qZ = qu[1],
              qW = Object(xz.c)(xV),
              qP = Object(xx.a)(qW, 2),
              qV = qP[0],
              qH = (qP[1], Object(xz.c)(xk)),
              qK = Object(xx.a)(qH, 2),
              qI = (qK[0], qK[1]),
              ql = Object(xz.c)(xC),
              qm = Object(xx.a)(ql, 2),
              qh = (qm[0], qm[1]),
              qB = Object(x4.useState)(''),
              qN = Object(xx.a)(qB, 2),
              qk = qN[0],
              qC = qN[1],
              qD = Object(x4.useState)(''),
              qv = Object(xx.a)(qD, 2),
              qj = qv[0],
              qY = qv[1],
              qO = Object(x4.useState)(null),
              qs = Object(xx.a)(qO, 2),
              w0 = qs[0],
              w1 = qs[1],
              w2 = Object(xz.c)(xD),
              w3 = Object(xx.a)(w2, 2),
              w4 = (w3[0], w3[1]),
              w5 = Object(xz.c)(xv),
              w6 = Object(xx.a)(w5, 2),
              w7 = (w6[0], w6[1]),
              w8 = Object(x4.useState)(''),
              w9 = Object(xx.a)(w8, 2),
              wx = w9[0],
              wb = w9[1],
              wG = Object(x4.useState)(''),
              wL = Object(xx.a)(wG, 2),
              wp = wL[0],
              wq = wL[1],
              ww = Object(x4.useState)(''),
              wy = Object(xx.a)(ww, 2),
              wA = wy[0],
              wc = wy[1],
              wU = Object(x4.useState)(''),
              wQ = Object(xx.a)(wU, 2),
              wJ = wQ[0],
              wF = wQ[1],
              wT = Object(xz.c)(br),
              wR = Object(xx.a)(wT, 2),
              wa = wR[0],
              wS = wR[1]
            Object(x4.useEffect)(function () {
              xL()
                ? (GT('Joe'),
                  GX('Mama'),
                  Gz('9'),
                  Gg('Chief of Police'),
                  GP('123'))
                : xc('fetchUserInfo', {}).then(function (wM) {
                    GT(wM.data.first)
                    GX(wM.data.last)
                    Gz(wM.data.rank)
                    Gg(wM.data.label)
                    GP(wM.data.callsign)
                  })
            })
            xq('openMDW', function (wM) {
              true === wM.show
                ? (wM.publicApp && (GB(3), GU.push('/profiles')),
                  qQ(false),
                  po(false),
                  pM(false),
                  pW(false),
                  q9(false),
                  qL(false),
                  qy(false),
                  pK(false),
                  ph(false),
                  pY(false),
                  q1(false),
                  q5(false),
                  Gc(true),
                  GI(wM.publicApp),
                  wS(wM.job),
                  wM.publicApp || (1 === Gh && GU.push('/dashboard')))
                : false === wM.show && Gc(false)
            })
            var wX = function (wM) {
                for (
                  var wu = '', wg = '0123456789', wZ = wg.length, wW = 0;
                  wW < wM;
                  wW++
                ) {
                  wu += wg.charAt(Math.floor(Math.random() * wZ))
                }
                return wu
              },
              wf = function (wM) {
                GB(wM)
                LR([])
                LX([])
                Lc([])
                LJ([])
                LO([])
                LD([])
                LL([])
                Lw([])
                GC([])
                Gj([])
                Gs([])
                w4([])
                w7([])
              },
              wo = function () {
                LO([])
                q5(false)
              },
              wd = function (wM) {
                return Number(wM).toLocaleString('en-Us', {
                  style: 'currency',
                  currency: 'USD',
                })
              },
              wz = function (wM) {
                return (
                  !wJ ||
                  wM
                    .toString()
                    .toLowerCase()
                    .includes(wJ.toString().toLowerCase())
                )
              },
              wE = LY.map(function (wM) {
                return Object(x8.a)(
                  Object(x8.a)({}, wM),
                  {},
                  {
                    charges: wM.charges.filter(function (wZ) {
                      return wz(wZ.title)
                    }),
                  }
                )
              }).filter(function (wM) {
                return wM.charges.length
              })
            return (
              xJ(Gc),
              Object(bS.jsx)(bS.Fragment, {
                children: Object(bS.jsxs)(xG.a, {
                  theme: GG,
                  children: [
                    Object(bS.jsx)(G8, {}),
                    Object(bS.jsx)('div', {
                      id: 'main-app-container',
                      children: Object(bS.jsx)('div', {
                        className: Gq.mdwOuterContainer,
                        style: {
                          visibility: GA ? 'visible' : 'hidden',
                          opacity: qU ? '0.5' : '1',
                        },
                        children: Object(bS.jsxs)('div', {
                          className: Gq.mdwInnerContainer,
                          style: {
                            top: GA ? 'calc(8.5% - 72px)' : 'calc(100vh + 32px)',
                          },
                          children: [
                            Object(bS.jsx)(bX, { show: pE }),
                            Object(bS.jsx)(bd, {
                              show: q8,
                              confirm: function () {
                                q9(false)
                                pM(true)
                                xc('np-mdw:assignLicense', {
                                  cid: p1,
                                  type: qV,
                                }).then(function (wu) {
                                  var wg
                                  wg = p1
                                  pM(true)
                                  xc('np-mdw:loadProfile', { value: wg }).then(
                                    function (wZ) {
                                      Lx(wZ.data.licenses)
                                      pM(false)
                                    }
                                  )
                                  pM(false)
                                })
                              },
                              close: function () {
                                return q9(false)
                              },
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwHireOfficerModalContainer,
                              style: { display: qw ? '' : 'none' },
                              children: Object(bS.jsx)('div', {
                                className: Gq.mdwHireOfficerModalInnerContainer,
                                children: Object(bS.jsxs)('div', {
                                  className: 'mdw-details',
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'space-between',
                                    position: 'relative',
                                    justifyContent: 'space-between',
                                    flex: '1 1',
                                    overflow: 'hidden',
                                  },
                                  children: [
                                    Object(bS.jsxs)('div', {
                                      className: 'mdw-desc',
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            padding: '15px',
                                          },
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              color: '#fff',
                                              wordBreak: 'break-word',
                                            },
                                            variant: 'body1',
                                            gutterBottom: true,
                                            children: 'Hire Staff',
                                          }),
                                        }),
                                        Object(bS.jsxs)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            paddingBottom: '0px',
                                          },
                                          children: [
                                            Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xF.a, {
                                                sx: {
                                                  '& .MuiInput-root': {
                                                    color: 'white !important',
                                                  },
                                                  '& label.Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:after': {
                                                    borderColor:
                                                      'white !important',
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .Mui-focused:after': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInputAdornment-root': {
                                                    color: 'darkgray !important',
                                                  },
                                                },
                                                id: 'input-with-icon-textfield',
                                                label: 'State ID',
                                                variant: 'standard',
                                                value: wx,
                                                onChange: function (wM) {
                                                  return wb(wM.target.value)
                                                },
                                                InputProps: {
                                                  startAdornment: Object(bS.jsx)(
                                                    xT.a,
                                                    {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-id-card fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                },
                                              }),
                                            }),
                                            Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xF.a, {
                                                sx: {
                                                  '& .MuiInput-root': {
                                                    color: 'white !important',
                                                  },
                                                  '& label.Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:after': {
                                                    borderColor:
                                                      'white !important',
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .Mui-focused:after': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInputAdornment-root': {
                                                    color: 'darkgray !important',
                                                  },
                                                },
                                                id: 'input-with-icon-textfield',
                                                label: 'Callsign',
                                                variant: 'standard',
                                                value: wp,
                                                onChange: function (wM) {
                                                  return wq(wM.target.value)
                                                },
                                                InputProps: {
                                                  startAdornment: Object(bS.jsx)(
                                                    xT.a,
                                                    {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-clipboard fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                },
                                              }),
                                            }),
                                            Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsxs)(xF.a, {
                                                id: 'outlined-select-currency',
                                                variant: 'standard',
                                                select: true,
                                                label: 'Rank',
                                                value: wA,
                                                onChange: function (wM) {
                                                  return wc(wM.target.value)
                                                },
                                                sx: {
                                                  '& .MuiInput-root': {
                                                    color: 'white !important',
                                                  },
                                                  '& label.Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:after': {
                                                    borderColor:
                                                      'white !important',
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .Mui-focused:after': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInputAdornment-root': {
                                                    color: 'darkgray !important',
                                                  },
                                                },
                                                children: [
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '1',
                                                      children: 'Cadet',
                                                    },
                                                    '1'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '2',
                                                      children: 'Officer',
                                                    },
                                                    '2'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '3',
                                                      children: 'Senior Officer',
                                                    },
                                                    '3'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '4',
                                                      children: 'Corporal',
                                                    },
                                                    '4'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '5',
                                                      children: 'Sergeant',
                                                    },
                                                    '5'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '6',
                                                      children: 'Lieutenant',
                                                    },
                                                    '6'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '7',
                                                      children: 'Captain',
                                                    },
                                                    '7'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '8',
                                                      children:
                                                        'Deputy Chief Of Police',
                                                    },
                                                    '8'
                                                  ),
                                                  Object(bS.jsx)(
                                                    xR.a,
                                                    {
                                                      value: '9',
                                                      children: 'Chief Of Police',
                                                    },
                                                    '9'
                                                  ),
                                                ],
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: 'mdw-alignbottom',
                                      style: {
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '8px',
                                        marginTop: '1%',
                                      },
                                      children: Object(bS.jsxs)(xa.a, {
                                        direction: 'row',
                                        spacing: 1,
                                        children: [
                                          Object(bS.jsx)('div', {
                                            children: Object(bS.jsx)(xS.a, {
                                              onClick: function () {
                                                qy(false)
                                                pM(true)
                                                xc('np-mdw:hireStaff', {
                                                  cid: wx,
                                                  callsign: wp,
                                                  rank: wA,
                                                }).then(function (wu) {
                                                  wb('')
                                                  wq('')
                                                  wc('')
                                                  w4(wu.data)
                                                  w7(wu.data)
                                                  pM(false)
                                                })
                                              },
                                              size: 'small',
                                              color: 'success',
                                              variant: 'contained',
                                              children: 'Save',
                                            }),
                                          }),
                                          Object(bS.jsx)('div', {
                                            children: Object(bS.jsx)(xS.a, {
                                              onClick: function () {
                                                return qy(false)
                                              },
                                              size: 'small',
                                              color: 'warning',
                                              variant: 'contained',
                                              children: 'Close',
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwCreateWarrantModalContainer,
                              style: { display: qG ? '' : 'none' },
                              children: Object(bS.jsx)('div', {
                                className: Gq.mdwCreateWarrantModalInnerContainer,
                                children: Object(bS.jsxs)('div', {
                                  className: 'mdw-details',
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'space-between',
                                    position: 'relative',
                                    justifyContent: 'space-between',
                                    flex: '1 1',
                                    overflow: 'hidden',
                                  },
                                  children: [
                                    Object(bS.jsxs)('div', {
                                      className: 'mdw-desc',
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            padding: '15px',
                                          },
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              color: '#fff',
                                              wordBreak: 'break-word',
                                            },
                                            variant: 'body1',
                                            gutterBottom: true,
                                            children: 'Create Warrant',
                                          }),
                                        }),
                                        Object(bS.jsxs)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            paddingBottom: '0px',
                                          },
                                          children: [
                                            Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xF.a, {
                                                sx: {
                                                  '& .MuiInput-root': {
                                                    color: 'white !important',
                                                  },
                                                  '& label.Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:after': {
                                                    borderColor:
                                                      'white !important',
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .Mui-focused:after': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInputAdornment-root': {
                                                    color: 'darkgray !important',
                                                  },
                                                },
                                                id: 'input-with-icon-textfield',
                                                label: 'State ID',
                                                variant: 'standard',
                                                value: qk,
                                                onChange: function (wM) {
                                                  return qC(wM.target.value)
                                                },
                                                InputProps: {
                                                  startAdornment: Object(bS.jsx)(
                                                    xT.a,
                                                    {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-id-card fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                },
                                              }),
                                            }),
                                            Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xF.a, {
                                                sx: {
                                                  '& .MuiInput-root': {
                                                    color: 'white !important',
                                                  },
                                                  '& label.Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:after': {
                                                    borderColor:
                                                      'white !important',
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .Mui-focused:after': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInputAdornment-root': {
                                                    color: 'darkgray !important',
                                                  },
                                                },
                                                id: 'input-with-icon-textfield',
                                                label: 'Incident ID (0 if none)',
                                                variant: 'standard',
                                                value: qj,
                                                onChange: function (wM) {
                                                  return qY(wM.target.value)
                                                },
                                                InputProps: {
                                                  startAdornment: Object(bS.jsx)(
                                                    xT.a,
                                                    {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-pen fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                },
                                              }),
                                            }),
                                            Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: {
                                                width: '96%',
                                                marginBottom: '5%',
                                                '& .MuiInput-root': {
                                                  color: 'white !important',
                                                },
                                                '& label.Mui-focused': {
                                                  color: 'darkgray !important',
                                                },
                                                '& Mui-focused': {
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                  {
                                                    borderColor:
                                                      'darkgray !important',
                                                  },
                                                '& .MuiInput-underline:before': {
                                                  borderColor:
                                                    'darkgray !important',
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInput-underline:after': {
                                                  borderColor: 'white !important',
                                                  color: 'darkgray !important',
                                                },
                                                '& .Mui-focused:after': {
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInputAdornment-root': {
                                                  color: 'darkgray !important',
                                                },
                                              },
                                              children: Object(bS.jsx)(bh.b, {
                                                dateAdapter: bm.a,
                                                children: Object(bS.jsx)(G9.a, {
                                                  label: 'Expiration Date',
                                                  value: w0,
                                                  onChange: function (wM) {
                                                    w1(wM)
                                                  },
                                                  renderInput: function (wM) {
                                                    return Object(bS.jsx)(
                                                      xF.a,
                                                      Object(x8.a)(
                                                        { variant: 'standard' },
                                                        wM
                                                      )
                                                    )
                                                  },
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: 'mdw-alignbottom',
                                      style: {
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '8px',
                                        marginTop: '1%',
                                      },
                                      children: Object(bS.jsxs)(xa.a, {
                                        direction: 'row',
                                        spacing: 1,
                                        children: [
                                          Object(bS.jsx)('div', {
                                            children: Object(bS.jsx)(xS.a, {
                                              onClick: function () {
                                                qL(false)
                                                pM(true)
                                                var wu = w0
                                                null !== w0 &&
                                                  (wu = bZ()(w0).format('X'))
                                                xc('np-mdw:createWarrant', {
                                                  cid: qk,
                                                  incidentId: qj,
                                                  expiry: wu,
                                                }).then(function (wZ) {
                                                  qC('')
                                                  qY('')
                                                  w1(null)
                                                  qI(wZ.data)
                                                  qh(wZ.data)
                                                  pM(false)
                                                })
                                              },
                                              size: 'small',
                                              color: 'success',
                                              variant: 'contained',
                                              children: 'Save',
                                            }),
                                          }),
                                          Object(bS.jsx)('div', {
                                            children: Object(bS.jsx)(xS.a, {
                                              onClick: function () {
                                                return qL(false)
                                              },
                                              size: 'small',
                                              color: 'warning',
                                              variant: 'contained',
                                              children: 'Close',
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwAssignOfficerModalContainer,
                              style: { display: pm ? '' : 'none' },
                              children: Object(bS.jsx)('div', {
                                className: Gq.mdwAssignOfficerModalInnerContainer,
                                children: Object(bS.jsxs)('div', {
                                  className: Gq.mdwIncidentsInnerContentLeft,
                                  style: { backgroundColor: 'transparent' },
                                  children: [
                                    Object(bS.jsxs)('div', {
                                      className:
                                        Gq.mdwIncidentsInnerContentLeftHeader,
                                      style: { padding: '13px' },
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className:
                                            'mdw-incidents-inner-content-left-header-text-left',
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              color: '#fff',
                                              wordBreak: 'break-word',
                                            },
                                            variant: 'body2',
                                            gutterBottom: true,
                                            children: 'Assign Officer',
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          className:
                                            Gq.mdwInnerContentLeftHeaderTextRight,
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: Gq.mdwInnerContentLeftBody,
                                      style: {
                                        padding: '0px',
                                        paddingLeft: '13px',
                                        paddingRight: '13px',
                                        marginBottom: '1%',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        className: 'input-wrapper',
                                        children: Object(bS.jsx)(xr.a, {
                                          fullWidth: true,
                                          sx: { width: '100%' },
                                          children: Object(bS.jsx)(xF.a, {
                                            sx: {
                                              '& .MuiInput-root': {
                                                color: 'white !important',
                                              },
                                              '& label.Mui-focused': {
                                                color: 'darkgray !important',
                                              },
                                              '& Mui-focused': {
                                                color: 'darkgray !important',
                                              },
                                              '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                {
                                                  borderColor:
                                                    'darkgray !important',
                                                },
                                              '& .MuiInput-underline:before': {
                                                borderColor:
                                                  'darkgray !important',
                                                color: 'darkgray !important',
                                              },
                                              '& .MuiInput-underline:after': {
                                                borderColor: 'white !important',
                                                color: 'darkgray !important',
                                              },
                                              '& .Mui-focused:after': {
                                                color: 'darkgray !important',
                                              },
                                              '& .MuiInputAdornment-root': {
                                                color: 'darkgray !important',
                                              },
                                            },
                                            id: 'input-with-icon-textfield',
                                            label: 'Search',
                                            variant: 'standard',
                                            onChange: function (wM) {
                                              return (function (wu) {
                                                if ('' !== wu) {
                                                  var wZ = Ld.filter(function (
                                                    wW
                                                  ) {
                                                    return (
                                                      wW.cid
                                                        .toString()
                                                        .toLowerCase()
                                                        .startsWith(
                                                          wu.toLowerCase()
                                                        ) ||
                                                      wW.name
                                                        .toString()
                                                        .toLowerCase()
                                                        .startsWith(
                                                          wu.toLowerCase()
                                                        ) ||
                                                      wW.callsign
                                                        .toString()
                                                        .toLowerCase()
                                                        .startsWith(
                                                          wu.toLowerCase()
                                                        )
                                                    )
                                                  })
                                                  Lg(wZ)
                                                } else {
                                                  Lg(Ld)
                                                }
                                              })(wM.target.value)
                                            },
                                            InputProps: {
                                              startAdornment: Object(bS.jsx)(
                                                xT.a,
                                                {
                                                  position: 'start',
                                                  children: Object(bS.jsx)('i', {
                                                    className:
                                                      'fas fa-search fa-w-16 fa-fw',
                                                  }),
                                                }
                                              ),
                                            },
                                          }),
                                        }),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: Gq.mdwInnerContentLeftBody,
                                      style: {
                                        padding: '0px',
                                        paddingLeft: '5px',
                                        paddingRight: '5px',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        className: Gq.mdwAssignOfficerChipWrapper,
                                        style: {
                                          flexDirection: 'row',
                                          flexWrap: 'wrap',
                                          flex: '0 !important',
                                          height: '163px',
                                          maxHeight: '163px',
                                          overflow: 'auto',
                                        },
                                        children:
                                          Lu && Lu.length > 0
                                            ? Lu.map(function (wM) {
                                                return Object(bS.jsx)('div', {
                                                  style: {
                                                    paddingRight: '1%',
                                                    paddingBottom: '1.5%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: '('
                                                      .concat(wM.callsign, ') ')
                                                      .concat(wM.name),
                                                    onClick: function () {
                                                      return (function (
                                                        wZ,
                                                        wW,
                                                        wP
                                                      ) {
                                                        var wV = {
                                                            cid: wZ,
                                                            name: wW,
                                                            callsign: wP,
                                                          },
                                                          wH = [].concat(
                                                            Object(x9.a)(
                                                              pp || []
                                                            ),
                                                            [wV]
                                                          )
                                                        pq(wH)
                                                        var wK = Ld.filter(
                                                          function (wl) {
                                                            return (
                                                              wl.id.toString() !==
                                                              wZ.toString()
                                                            )
                                                          }
                                                        )
                                                        Lz(wK)
                                                        Lg(wK)
                                                      })(
                                                        wM.cid,
                                                        wM.name,
                                                        wM.callsign
                                                      )
                                                    },
                                                    sx: {
                                                      backgroundColor: '#fff',
                                                      color: '#000',
                                                    },
                                                  }),
                                                })
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {}),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      className:
                                        Gq.mdwIncidentsInnerContentLeftHeader,
                                      style: {
                                        padding: '13px',
                                        marginTop: '17.1%',
                                        justifyContent: 'center',
                                        display: pZ ? 'none' : '',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(xS.a, {
                                          onClick: function () {
                                            Lz([])
                                            Lg([])
                                            ph(false)
                                          },
                                          size: 'small',
                                          color: 'warning',
                                          variant: 'contained',
                                          children: 'Close',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwAssignEmsModalContainer,
                              style: { display: pk ? '' : 'none' },
                              children: Object(bS.jsx)('div', {
                                className: Gq.mdwAssignEmsModalInnerContainer,
                                children: Object(bS.jsxs)('div', {
                                  className: Gq.mdwIncidentsInnerContentLeft,
                                  style: { backgroundColor: 'transparent' },
                                  children: [
                                    Object(bS.jsxs)('div', {
                                      className:
                                        Gq.mdwIncidentsInnerContentLeftHeader,
                                      style: { padding: '13px' },
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className:
                                            'mdw-incidents-inner-content-left-header-text-left',
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              color: '#fff',
                                              wordBreak: 'break-word',
                                            },
                                            variant: 'body2',
                                            gutterBottom: true,
                                            children: 'Assign EMS',
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          className:
                                            Gq.mdwInnerContentLeftHeaderTextRight,
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: Gq.mdwInnerContentLeftBody,
                                      style: {
                                        padding: '0px',
                                        paddingLeft: '13px',
                                        paddingRight: '13px',
                                        marginBottom: '1%',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        className: 'input-wrapper',
                                        children: Object(bS.jsx)(xr.a, {
                                          fullWidth: true,
                                          sx: { width: '100%' },
                                          children: Object(bS.jsx)(xF.a, {
                                            sx: {
                                              '& .MuiInput-root': {
                                                color: 'white !important',
                                              },
                                              '& label.Mui-focused': {
                                                color: 'darkgray !important',
                                              },
                                              '& Mui-focused': {
                                                color: 'darkgray !important',
                                              },
                                              '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                {
                                                  borderColor:
                                                    'darkgray !important',
                                                },
                                              '& .MuiInput-underline:before': {
                                                borderColor:
                                                  'darkgray !important',
                                                color: 'darkgray !important',
                                              },
                                              '& .MuiInput-underline:after': {
                                                borderColor: 'white !important',
                                                color: 'darkgray !important',
                                              },
                                              '& .Mui-focused:after': {
                                                color: 'darkgray !important',
                                              },
                                              '& .MuiInputAdornment-root': {
                                                color: 'darkgray !important',
                                              },
                                            },
                                            id: 'input-with-icon-textfield',
                                            label: 'Search',
                                            variant: 'standard',
                                            onChange: function (wM) {
                                              return (function (wZ) {
                                                if ('' !== wZ) {
                                                  var wP = LP.filter(function (
                                                    wV
                                                  ) {
                                                    return (
                                                      wV.cid
                                                        .toString()
                                                        .toLowerCase()
                                                        .startsWith(
                                                          wZ.toLowerCase()
                                                        ) ||
                                                      wV.name
                                                        .toString()
                                                        .toLowerCase()
                                                        .startsWith(
                                                          wZ.toLowerCase()
                                                        ) ||
                                                      wV.callsign
                                                        .toString()
                                                        .toLowerCase()
                                                        .startsWith(
                                                          wZ.toLowerCase()
                                                        )
                                                    )
                                                  })
                                                  Ll(wP)
                                                } else {
                                                  Ll(LP)
                                                }
                                              })(wM.target.value)
                                            },
                                            InputProps: {
                                              startAdornment: Object(bS.jsx)(
                                                xT.a,
                                                {
                                                  position: 'start',
                                                  children: Object(bS.jsx)('i', {
                                                    className:
                                                      'fas fa-search fa-w-16 fa-fw',
                                                  }),
                                                }
                                              ),
                                            },
                                          }),
                                        }),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: Gq.mdwInnerContentLeftBody,
                                      style: {
                                        padding: '0px',
                                        paddingLeft: '5px',
                                        paddingRight: '5px',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        className: Gq.mdwAssignEmsChipWrapper,
                                        style: {
                                          flexDirection: 'row',
                                          flexWrap: 'wrap',
                                          flex: '0 !important',
                                          height: '163px',
                                          maxHeight: '163px',
                                          overflow: 'auto',
                                        },
                                        children:
                                          LI && LI.length > 0
                                            ? LI.map(function (wM) {
                                                return Object(bS.jsx)('div', {
                                                  style: {
                                                    paddingRight: '1%',
                                                    paddingBottom: '1.5%',
                                                  },
                                                  children: Object(bS.jsx)(xX.a, {
                                                    label: '('
                                                      .concat(wM.callsign, ') ')
                                                      .concat(wM.name),
                                                    onClick: function () {
                                                      return (function (
                                                        wZ,
                                                        wW,
                                                        wP
                                                      ) {
                                                        var wV = {
                                                            cid: wZ,
                                                            name: wW,
                                                            callsign: wP,
                                                          },
                                                          wH = [].concat(
                                                            Object(x9.a)(
                                                              pA || []
                                                            ),
                                                            [wV]
                                                          )
                                                        pc(wH)
                                                        var wK = Ld.filter(
                                                          function (wI) {
                                                            return (
                                                              wI.id.toString() !==
                                                              wZ.toString()
                                                            )
                                                          }
                                                        )
                                                        LV(wK)
                                                        Ll(wK)
                                                      })(
                                                        wM.cid,
                                                        wM.name,
                                                        wM.callsign
                                                      )
                                                    },
                                                    sx: {
                                                      backgroundColor: '#fff',
                                                      color: '#000',
                                                    },
                                                  }),
                                                })
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {}),
                                      }),
                                    }),
                                    Object(bS.jsx)('div', {
                                      className:
                                        Gq.mdwIncidentsInnerContentLeftHeader,
                                      style: {
                                        padding: '13px',
                                        marginTop: '17.1%',
                                        justifyContent: 'center',
                                        display: pZ ? 'none' : '',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(xS.a, {
                                          onClick: function () {
                                            LV([]), Ll([]), pC(false)
                                          },
                                          size: 'small',
                                          color: 'warning',
                                          variant: 'contained',
                                          children: 'Close',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwAssignPersonModalContainer,
                              style: { display: pj ? '' : 'none' },
                              children: Object(bS.jsxs)('div', {
                                className: Gq.mdwAssignPersonModalInnerContainer,
                                children: [
                                  Object(bS.jsx)('div', {
                                    className: 'spinnerwrapper',
                                    style: {
                                      display: pZ ? '' : 'none',
                                      marginLeft: '44%',
                                      marginTop: '14%',
                                    },
                                    children: Object(bS.jsxs)('div', {
                                      className: 'lds-spinner',
                                      children: [
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                      ],
                                    }),
                                  }),
                                  Object(bS.jsxs)('div', {
                                    className: Gq.mdwIncidentsInnerContentLeft,
                                    style: {
                                      backgroundColor: 'transparent',
                                      display: pZ ? 'none' : '',
                                    },
                                    children: [
                                      Object(bS.jsx)('div', {
                                        className: Gq.mdwInnerContentLeftBody,
                                        style: {
                                          padding: '0px',
                                          paddingLeft: '13px',
                                          paddingRight: '13px',
                                          marginBottom: '1%',
                                          marginTop: '1%',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'input-wrapper',
                                          children: Object(bS.jsx)(xr.a, {
                                            fullWidth: true,
                                            sx: { width: '100%' },
                                            children: Object(bS.jsx)(xF.a, {
                                              sx: {
                                                '& .MuiInput-root': {
                                                  color: 'white !important',
                                                },
                                                '& label.Mui-focused': {
                                                  color: 'darkgray !important',
                                                },
                                                '& Mui-focused': {
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                  {
                                                    borderColor:
                                                      'darkgray !important',
                                                  },
                                                '& .MuiInput-underline:before': {
                                                  borderColor:
                                                    'darkgray !important',
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInput-underline:after': {
                                                  borderColor: 'white !important',
                                                  color: 'darkgray !important',
                                                },
                                                '& .Mui-focused:after': {
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInputAdornment-root': {
                                                  color: 'darkgray !important',
                                                },
                                              },
                                              id: 'input-with-icon-textfield',
                                              label: 'Name',
                                              variant: 'standard',
                                              onChange: function (wM) {
                                                var wg
                                                '' !== (wg = wM.target.value) &&
                                                void 0 !== wg
                                                  ? (L3([]),
                                                    xc('np-mdw:searchProfiles', {
                                                      value: wg,
                                                    }).then(function (wZ) {
                                                      L3(wZ.data)
                                                    }))
                                                  : L3([])
                                              },
                                              InputProps: {
                                                startAdornment: Object(bS.jsx)(
                                                  xT.a,
                                                  {
                                                    position: 'start',
                                                    children: Object(bS.jsx)(
                                                      'i',
                                                      {
                                                        className:
                                                          'fas fa-user fa-w-16 fa-fw',
                                                      }
                                                    ),
                                                  }
                                                ),
                                              },
                                            }),
                                          }),
                                        }),
                                      }),
                                      Object(bS.jsx)('div', {
                                        className: 'mdw-inner-content-colum-wrap',
                                        style: {
                                          display: 'flex',
                                          flexDirection: 'column',
                                          maxHeight: '250px',
                                          overflow: 'auto',
                                        },
                                        children:
                                          L2 && L2.length > 0
                                            ? L2.map(function (wM) {
                                                return Object(bS.jsxs)('div', {
                                                  className:
                                                    Gq.mdwInnerContentLeftBody,
                                                  style: {
                                                    padding: '0px',
                                                    paddingLeft: '13px',
                                                    paddingRight: '5px',
                                                    flexDirection: 'row',
                                                    overflow: 'unset',
                                                    marginBottom: '1%',
                                                  },
                                                  children: [
                                                    Object(bS.jsx)('div', {
                                                      className:
                                                        Gq.mdwCreateImage,
                                                      children: Object(bS.jsx)(
                                                        'img',
                                                        {
                                                          alt: '',
                                                          src: 'https://i.imgur.com/wxNT3y2.jpg',
                                                          style: {
                                                            height: '163px',
                                                            width: '185px',
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsxs)('div', {
                                                      className:
                                                        'mdw-create-inputs',
                                                      style: { width: '76.5%' },
                                                      children: [
                                                        Object(bS.jsx)('div', {
                                                          className:
                                                            'input-wrapper',
                                                          style: {
                                                            marginBottom: '2.5%',
                                                          },
                                                          children: Object(
                                                            bS.jsx
                                                          )(xr.a, {
                                                            fullWidth: true,
                                                            sx: { width: '100%' },
                                                            children: Object(
                                                              bS.jsx
                                                            )(xF.a, {
                                                              sx: {
                                                                '& .MuiInput-root':
                                                                  {
                                                                    color:
                                                                      'white !important',
                                                                  },
                                                                '& label.Mui-focused':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& Mui-focused': {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:after':
                                                                  {
                                                                    borderColor:
                                                                      'white !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .Mui-focused:after':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInputAdornment-root':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                              },
                                                              id: 'input-with-icon-textfield',
                                                              label: 'State ID',
                                                              variant: 'standard',
                                                              value: wM.id,
                                                              InputProps: {
                                                                readOnly: true,
                                                                startAdornment:
                                                                  Object(bS.jsx)(
                                                                    xT.a,
                                                                    {
                                                                      position:
                                                                        'start',
                                                                      children:
                                                                        Object(
                                                                          bS.jsx
                                                                        )('i', {
                                                                          className:
                                                                            'fas fa-id-card fa-w-16 fa-fw',
                                                                        }),
                                                                    }
                                                                  ),
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                        Object(bS.jsx)('div', {
                                                          className:
                                                            'input-wrapper',
                                                          style: {
                                                            marginBottom: '2.5%',
                                                          },
                                                          children: Object(
                                                            bS.jsx
                                                          )(xr.a, {
                                                            fullWidth: true,
                                                            sx: { width: '100%' },
                                                            children: Object(
                                                              bS.jsx
                                                            )(xF.a, {
                                                              sx: {
                                                                '& .MuiInput-root':
                                                                  {
                                                                    color:
                                                                      'white !important',
                                                                  },
                                                                '& label.Mui-focused':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& Mui-focused': {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:after':
                                                                  {
                                                                    borderColor:
                                                                      'white !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .Mui-focused:after':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInputAdornment-root':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                              },
                                                              id: 'input-with-icon-textfield',
                                                              label: 'Name',
                                                              variant: 'standard',
                                                              value: ''
                                                                .concat(
                                                                  wM.first_name,
                                                                  ' '
                                                                )
                                                                .concat(
                                                                  wM.last_name
                                                                ),
                                                              InputProps: {
                                                                readOnly: true,
                                                                startAdornment:
                                                                  Object(bS.jsx)(
                                                                    xT.a,
                                                                    {
                                                                      position:
                                                                        'start',
                                                                      children:
                                                                        Object(
                                                                          bS.jsx
                                                                        )('i', {
                                                                          className:
                                                                            'fas fa-user fa-w-16 fa-fw',
                                                                        }),
                                                                    }
                                                                  ),
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                        Object(bS.jsx)('div', {
                                                          children: Object(
                                                            bS.jsx
                                                          )(xS.a, {
                                                            onClick: function () {
                                                              return (function (
                                                                wZ,
                                                                wW,
                                                                wP
                                                              ) {
                                                                var wV = {
                                                                    cid: wZ,
                                                                    name:
                                                                      wW +
                                                                      ' ' +
                                                                      wP,
                                                                  },
                                                                  wH = [].concat(
                                                                    Object(x9.a)(
                                                                      pJ || []
                                                                    ),
                                                                    [wV]
                                                                  )
                                                                pF(wH)
                                                                var wK =
                                                                  L2.filter(
                                                                    function (
                                                                      wI
                                                                    ) {
                                                                      return (
                                                                        wI.id.toString() !==
                                                                        wZ.toString()
                                                                      )
                                                                    }
                                                                  )
                                                                L3(wK)
                                                              })(
                                                                wM.id,
                                                                wM.first_name,
                                                                wM.last_name
                                                              )
                                                            },
                                                            size: 'small',
                                                            color: 'success',
                                                            variant: 'contained',
                                                            children: 'Add',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {}),
                                      }),
                                      Object(bS.jsx)('div', {
                                        className:
                                          Gq.mdwIncidentsInnerContentLeftHeader,
                                        style: {
                                          padding: '13px',
                                          marginTop: '17.1%',
                                          justifyContent: 'center',
                                          display: pZ ? 'none' : '',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          children: Object(bS.jsx)(xS.a, {
                                            onClick: function () {
                                              L3([]), pY(false)
                                            },
                                            size: 'small',
                                            color: 'warning',
                                            variant: 'contained',
                                            children: 'Close',
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwAddCriminalModalContainer,
                              style: { display: q0 ? '' : 'none' },
                              children: Object(bS.jsxs)('div', {
                                className: Gq.mdwAddCriminalModalInnerContainer,
                                children: [
                                  Object(bS.jsx)('div', {
                                    className: 'spinnerwrapper',
                                    style: {
                                      display: pZ ? '' : 'none',
                                      marginLeft: '44%',
                                      marginTop: '14%',
                                    },
                                    children: Object(bS.jsxs)('div', {
                                      className: 'lds-spinner',
                                      children: [
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                      ],
                                    }),
                                  }),
                                  Object(bS.jsxs)('div', {
                                    className: Gq.mdwIncidentsInnerContentLeft,
                                    style: {
                                      backgroundColor: 'transparent',
                                      display: pZ ? 'none' : '',
                                    },
                                    children: [
                                      Object(bS.jsx)('div', {
                                        className: Gq.mdwInnerContentLeftBody,
                                        style: {
                                          padding: '0px',
                                          paddingLeft: '13px',
                                          paddingRight: '13px',
                                          marginBottom: '1%',
                                          marginTop: '1%',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          className: 'input-wrapper',
                                          children: Object(bS.jsx)(xr.a, {
                                            fullWidth: true,
                                            sx: { width: '100%' },
                                            children: Object(bS.jsx)(xF.a, {
                                              sx: {
                                                '& .MuiInput-root': {
                                                  color: 'white !important',
                                                },
                                                '& label.Mui-focused': {
                                                  color: 'darkgray !important',
                                                },
                                                '& Mui-focused': {
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                  {
                                                    borderColor:
                                                      'darkgray !important',
                                                  },
                                                '& .MuiInput-underline:before': {
                                                  borderColor:
                                                    'darkgray !important',
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInput-underline:after': {
                                                  borderColor: 'white !important',
                                                  color: 'darkgray !important',
                                                },
                                                '& .Mui-focused:after': {
                                                  color: 'darkgray !important',
                                                },
                                                '& .MuiInputAdornment-root': {
                                                  color: 'darkgray !important',
                                                },
                                              },
                                              id: 'input-with-icon-textfield',
                                              label: 'Name',
                                              variant: 'standard',
                                              onChange: function (wM) {
                                                var wg
                                                '' !== (wg = wM.target.value) &&
                                                void 0 !== wg
                                                  ? (L7([]),
                                                    xc('np-mdw:searchProfiles', {
                                                      value: wg,
                                                    }).then(function (wW) {
                                                      L7(wW.data)
                                                    }))
                                                  : L7([])
                                              },
                                              InputProps: {
                                                startAdornment: Object(bS.jsx)(
                                                  xT.a,
                                                  {
                                                    position: 'start',
                                                    children: Object(bS.jsx)(
                                                      'i',
                                                      {
                                                        className:
                                                          'fas fa-user fa-w-16 fa-fw',
                                                      }
                                                    ),
                                                  }
                                                ),
                                              },
                                            }),
                                          }),
                                        }),
                                      }),
                                      Object(bS.jsx)('div', {
                                        className: 'mdw-inner-content-colum-wrap',
                                        style: {
                                          display: 'flex',
                                          flexDirection: 'column',
                                          maxHeight: '250px',
                                          overflow: 'auto',
                                        },
                                        children:
                                          L6 && L6.length > 0
                                            ? L6.map(function (wM) {
                                                return Object(bS.jsxs)('div', {
                                                  className:
                                                    Gq.mdwInnerContentLeftBody,
                                                  style: {
                                                    padding: '0px',
                                                    paddingLeft: '13px',
                                                    paddingRight: '5px',
                                                    flexDirection: 'row',
                                                    overflow: 'unset',
                                                    marginBottom: '1%',
                                                  },
                                                  children: [
                                                    Object(bS.jsx)('div', {
                                                      className:
                                                        Gq.mdwCreateImage,
                                                      children: Object(bS.jsx)(
                                                        'img',
                                                        {
                                                          alt: '',
                                                          src:
                                                            void 0 !==
                                                            wM.profilepic
                                                              ? ''.concat(
                                                                  wM.profilepic
                                                                )
                                                              : 'https://i.imgur.com/wxNT3y2.jpg',
                                                          style: {
                                                            height: '163px',
                                                            width: '185px',
                                                          },
                                                        }
                                                      ),
                                                    }),
                                                    Object(bS.jsxs)('div', {
                                                      className:
                                                        'mdw-create-inputs',
                                                      style: { width: '76.5%' },
                                                      children: [
                                                        Object(bS.jsx)('div', {
                                                          className:
                                                            'input-wrapper',
                                                          style: {
                                                            marginBottom: '2.5%',
                                                          },
                                                          children: Object(
                                                            bS.jsx
                                                          )(xr.a, {
                                                            fullWidth: true,
                                                            sx: { width: '100%' },
                                                            children: Object(
                                                              bS.jsx
                                                            )(xF.a, {
                                                              sx: {
                                                                '& .MuiInput-root':
                                                                  {
                                                                    color:
                                                                      'white !important',
                                                                  },
                                                                '& label.Mui-focused':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& Mui-focused': {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:after':
                                                                  {
                                                                    borderColor:
                                                                      'white !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .Mui-focused:after':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInputAdornment-root':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                              },
                                                              id: 'input-with-icon-textfield',
                                                              label: 'State ID',
                                                              variant: 'standard',
                                                              value: wM.id,
                                                              InputProps: {
                                                                readOnly: true,
                                                                startAdornment:
                                                                  Object(bS.jsx)(
                                                                    xT.a,
                                                                    {
                                                                      position:
                                                                        'start',
                                                                      children:
                                                                        Object(
                                                                          bS.jsx
                                                                        )('i', {
                                                                          className:
                                                                            'fas fa-id-card fa-w-16 fa-fw',
                                                                        }),
                                                                    }
                                                                  ),
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                        Object(bS.jsx)('div', {
                                                          className:
                                                            'input-wrapper',
                                                          style: {
                                                            marginBottom: '2.5%',
                                                          },
                                                          children: Object(
                                                            bS.jsx
                                                          )(xr.a, {
                                                            fullWidth: true,
                                                            sx: { width: '100%' },
                                                            children: Object(
                                                              bS.jsx
                                                            )(xF.a, {
                                                              sx: {
                                                                '& .MuiInput-root':
                                                                  {
                                                                    color:
                                                                      'white !important',
                                                                  },
                                                                '& label.Mui-focused':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& Mui-focused': {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:before':
                                                                  {
                                                                    borderColor:
                                                                      'darkgray !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInput-underline:after':
                                                                  {
                                                                    borderColor:
                                                                      'white !important',
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .Mui-focused:after':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                                '& .MuiInputAdornment-root':
                                                                  {
                                                                    color:
                                                                      'darkgray !important',
                                                                  },
                                                              },
                                                              id: 'input-with-icon-textfield',
                                                              label: 'Name',
                                                              variant: 'standard',
                                                              value: ''
                                                                .concat(
                                                                  wM.first_name,
                                                                  ' '
                                                                )
                                                                .concat(
                                                                  wM.last_name
                                                                ),
                                                              InputProps: {
                                                                readOnly: true,
                                                                startAdornment:
                                                                  Object(bS.jsx)(
                                                                    xT.a,
                                                                    {
                                                                      position:
                                                                        'start',
                                                                      children:
                                                                        Object(
                                                                          bS.jsx
                                                                        )('i', {
                                                                          className:
                                                                            'fas fa-user fa-w-16 fa-fw',
                                                                        }),
                                                                    }
                                                                  ),
                                                              },
                                                            }),
                                                          }),
                                                        }),
                                                        Object(bS.jsx)('div', {
                                                          children: Object(
                                                            bS.jsx
                                                          )(xS.a, {
                                                            onClick: function () {
                                                              return (function (
                                                                wg,
                                                                wZ,
                                                                wW
                                                              ) {
                                                                var wV = {
                                                                    cid: wg,
                                                                    name:
                                                                      wZ +
                                                                      ' ' +
                                                                      wW,
                                                                    charges: [],
                                                                    months: 0,
                                                                    fine: 0,
                                                                    points: 0,
                                                                    guilty: false,
                                                                    processed:
                                                                      false,
                                                                    warrant:
                                                                      false,
                                                                    warrantdate: 0,
                                                                  },
                                                                  wH = [].concat(
                                                                    Object(x9.a)(
                                                                      pa || []
                                                                    ),
                                                                    [wV]
                                                                  )
                                                                xc(
                                                                  'np-mdw:updateIncident',
                                                                  {
                                                                    id: p7,
                                                                    value: wH,
                                                                    type: 'criminals',
                                                                  }
                                                                ).then(function (
                                                                  wl
                                                                ) {
                                                                  pS(wH)
                                                                })
                                                                var wK =
                                                                  L6.filter(
                                                                    function (
                                                                      wl
                                                                    ) {
                                                                      return (
                                                                        wl.id.toString() !==
                                                                        wg.toString()
                                                                      )
                                                                    }
                                                                  )
                                                                L7(wK)
                                                              })(
                                                                wM.id,
                                                                wM.first_name,
                                                                wM.last_name
                                                              )
                                                            },
                                                            size: 'small',
                                                            color: 'success',
                                                            variant: 'contained',
                                                            children: 'Add',
                                                          }),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                })
                                              })
                                            : Object(bS.jsx)(bS.Fragment, {}),
                                      }),
                                      Object(bS.jsx)('div', {
                                        className:
                                          Gq.mdwIncidentsInnerContentLeftHeader,
                                        style: {
                                          padding: '13px',
                                          marginTop: '17.1%',
                                          justifyContent: 'center',
                                          display: pZ ? 'none' : '',
                                        },
                                        children: Object(bS.jsx)('div', {
                                          children: Object(bS.jsx)(xS.a, {
                                            onClick: function () {
                                              L7([])
                                              q1(false)
                                            },
                                            size: 'small',
                                            color: 'warning',
                                            variant: 'contained',
                                            children: 'Close',
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwAddChargeModalContainer,
                              style: { display: q4 ? '' : 'none' },
                              children: Object(bS.jsxs)('div', {
                                className: Gq.mdwAddChargeModalInnerContainer,
                                children: [
                                  Object(bS.jsx)('div', {
                                    className: 'spinnerwrapper',
                                    style: {
                                      display: pZ ? '' : 'none',
                                      marginLeft: '44%',
                                      marginTop: '14%',
                                    },
                                    children: Object(bS.jsxs)('div', {
                                      className: 'lds-spinner',
                                      children: [
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                        Object(bS.jsx)('div', {}),
                                      ],
                                    }),
                                  }),
                                  Object(bS.jsxs)('div', {
                                    className: Gq.mdwIncidentsInnerContentLeft,
                                    style: {
                                      backgroundColor: 'transparent',
                                      display: pZ ? 'none' : '',
                                    },
                                    children: [
                                      Object(bS.jsxs)('div', {
                                        className:
                                          Gq.mdwIncidentsInnerContentLeftHeader,
                                        children: [
                                          Object(bS.jsx)('div', {
                                            className:
                                              'mdw-incidents-inner-content-left-header-text-left',
                                            children: Object(bS.jsx)(bF.a, {
                                              style: {
                                                color: '#fff',
                                                wordBreak: 'break-word',
                                              },
                                              variant: 'body1',
                                              gutterBottom: true,
                                              children: 'Current Charges',
                                            }),
                                          }),
                                          Object(bS.jsx)('div', {
                                            className:
                                              Gq.mdwInnerContentLeftHeaderTextRight,
                                            children: Object(bS.jsxs)(xa.a, {
                                              direction: 'row',
                                              spacing: 2,
                                              children: [
                                                Object(bS.jsx)(xS.a, {
                                                  onClick: wo,
                                                  size: 'small',
                                                  color: 'warning',
                                                  variant: 'contained',
                                                  children: 'Close',
                                                }),
                                                Object(bS.jsx)(xS.a, {
                                                  onClick: wo,
                                                  size: 'small',
                                                  color: 'success',
                                                  variant: 'contained',
                                                  children: 'Done',
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      Object(bS.jsxs)('div', {
                                        className: Gq.mdwInnerContentLeftBody,
                                        children: [
                                          Object(bS.jsx)('div', {
                                            className:
                                              Gq.mdwInnerContentMiddleBody,
                                            style: {
                                              flexDirection: 'row',
                                              flexWrap: 'wrap',
                                              flex: '0 1 0%',
                                              overflowY: 'unset',
                                              paddingLeft: '0px',
                                            },
                                            children:
                                              LB && LB.length > 0
                                                ? LB.map(function (wM) {
                                                    return Object(bS.jsx)('div', {
                                                      style: {
                                                        paddingRight: '0.5%',
                                                        paddingBottom: '1.5%',
                                                      },
                                                      children: Object(bS.jsx)(
                                                        xX.a,
                                                        {
                                                          label: wM.title,
                                                          onDelete: function () {
                                                            return (function (
                                                              wZ,
                                                              wW,
                                                              wP,
                                                              wV
                                                            ) {
                                                              var wK = Object(
                                                                  x9.a
                                                                )(pa),
                                                                wI = p4,
                                                                wl = wK.findIndex(
                                                                  function (wC) {
                                                                    return (
                                                                      wC.cid.toString() ===
                                                                      wI.toString()
                                                                    )
                                                                  }
                                                                ),
                                                                wm = wK[
                                                                  wl
                                                                ].charges.filter(
                                                                  function (wC) {
                                                                    return (
                                                                      wC.id.toString() !==
                                                                      wZ.toString()
                                                                    )
                                                                  }
                                                                ),
                                                                wh =
                                                                  Number(
                                                                    wK[wl].months
                                                                  ) || 0,
                                                                wB =
                                                                  Number(
                                                                    wK[wl].fine
                                                                  ) || 0,
                                                                wN =
                                                                  Number(
                                                                    wK[wl].points
                                                                  ) || 0
                                                              wK[wl].charges = wm
                                                              wK[wl].months =
                                                                wh - Number(wW)
                                                              wK[wl].fine =
                                                                wB - Number(wP)
                                                              wK[wl].points =
                                                                wN - Number(wV)
                                                              pS(wK)
                                                              LN(wm)
                                                            })(
                                                              wM.id,
                                                              wM.months,
                                                              wM.fine,
                                                              wM.points
                                                            )
                                                          },
                                                          sx: {
                                                            backgroundColor:
                                                              '#000',
                                                            color: '#fff',
                                                            '& .MuiChip-deleteIcon':
                                                              { color: '#fff' },
                                                            '& .MuiChip-deleteIcon:hover':
                                                              {
                                                                color:
                                                                  'rgba(255, 255, 255, 0.5)',
                                                              },
                                                          },
                                                        }
                                                      ),
                                                    })
                                                  })
                                                : Object(bS.jsx)(bS.Fragment, {}),
                                          }),
                                          Object(bS.jsx)(xf.a, {
                                            style: {
                                              borderColor: 'rgb(255, 255, 255)',
                                            },
                                            variant: 'fullWidth',
                                          }),
                                        ],
                                      }),
                                      Object(bS.jsx)('div', {
                                        className: Gq.mdwChargesInnerContent,
                                        style: {
                                          height: '17%',
                                          flexDirection: 'column',
                                          marginBottom: '0.2%',
                                          padding: '8px',
                                        },
                                        children: Object(bS.jsxs)('div', {
                                          className:
                                            Gq.mdwChargesInnerContentLeft,
                                          children: [
                                            Object(bS.jsxs)('div', {
                                              className:
                                                Gq.mdwChargesInnerContentLeftHeader,
                                              children: [
                                                Object(bS.jsx)('div', {
                                                  className:
                                                    'mdw-charges-inner-content-left-header-text-left',
                                                  children: Object(bS.jsx)(bF.a, {
                                                    style: {
                                                      color: '#fff',
                                                      wordBreak: 'break-word',
                                                    },
                                                    variant: 'h6',
                                                    gutterBottom: true,
                                                    children: 'Charges',
                                                  }),
                                                }),
                                                Object(bS.jsx)('div', {
                                                  className:
                                                    Gq.mdwInnerContentLeftHeaderTextRight,
                                                  children: Object(bS.jsx)(
                                                    'div',
                                                    {
                                                      className: 'input-wrapper',
                                                      children: Object(bS.jsx)(
                                                        xr.a,
                                                        {
                                                          fullWidth: true,
                                                          sx: { width: '100%' },
                                                          children: Object(
                                                            bS.jsx
                                                          )(xF.a, {
                                                            sx: {
                                                              '& .MuiInput-root':
                                                                {
                                                                  color:
                                                                    'white !important',
                                                                },
                                                              '& label.Mui-focused':
                                                                {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                              '& Mui-focused': {
                                                                color:
                                                                  'darkgray !important',
                                                              },
                                                              '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                                {
                                                                  borderColor:
                                                                    'darkgray !important',
                                                                },
                                                              '& .MuiInput-underline:before':
                                                                {
                                                                  borderColor:
                                                                    'darkgray !important',
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                              '& .MuiInput-underline:after':
                                                                {
                                                                  borderColor:
                                                                    'white !important',
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                              '& .Mui-focused:after':
                                                                {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                              '& .MuiInputAdornment-root':
                                                                {
                                                                  color:
                                                                    'darkgray !important',
                                                                },
                                                            },
                                                            id: 'input-with-icon-textfield',
                                                            label: 'Search',
                                                            variant: 'standard',
                                                            onChange: function (
                                                              wM
                                                            ) {
                                                              return wF(
                                                                wM.target.value
                                                              )
                                                            },
                                                            InputProps: {
                                                              startAdornment:
                                                                Object(bS.jsx)(
                                                                  xT.a,
                                                                  {
                                                                    position:
                                                                      'start',
                                                                    children:
                                                                      Object(
                                                                        bS.jsx
                                                                      )('i', {
                                                                        className:
                                                                          'fas fa-search fa-w-16 fa-fw',
                                                                      }),
                                                                  }
                                                                ),
                                                            },
                                                          }),
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                            Object(bS.jsx)('div', {
                                              className:
                                                Gq.mdwInnerContentLeftBody,
                                              children: Object(bS.jsx)('div', {
                                                className:
                                                  'component-paper cursor-pointer',
                                                style: {
                                                  width: '100%',
                                                  borderBottom: '0px solid #fff',
                                                  borderRadius: '0px',
                                                  backgroundColor: '#222831',
                                                  border: '1px solid #000',
                                                },
                                                children: Object(bS.jsx)('div', {
                                                  className: 'main-container',
                                                  children: Object(bS.jsx)(
                                                    'div',
                                                    {
                                                      className: 'details',
                                                      children: Object(bS.jsx)(
                                                        'div',
                                                        {
                                                          className:
                                                            'description',
                                                          children: Object(
                                                            bS.jsx
                                                          )('div', {
                                                            className: 'flex-row',
                                                            children: Object(
                                                              bS.jsx
                                                            )(bF.a, {
                                                              style: {
                                                                color: '#fff',
                                                                wordBreak:
                                                                  'break-word',
                                                              },
                                                              variant: 'body2',
                                                              gutterBottom: true,
                                                              children:
                                                                'An accomplice differs from an accessory in that an accomplice is present at the actual crime, and could be prosecuted even if the main criminal (the principal) is not charged or convicted. An accessory is generally not present at the actual crime, and may be subject to lesser penalties than an accomplice or principal.',
                                                            }),
                                                          }),
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      wE && wE.length > 0
                                        ? wE.map(function (wM) {
                                            return Object(bS.jsx)('div', {
                                              className:
                                                Gq.mdwChargesInnerContent,
                                              style: {
                                                height: 'fit-content',
                                                flexDirection: 'column',
                                                marginBottom: '0.2%',
                                                padding: '8px',
                                              },
                                              children: Object(bS.jsxs)('div', {
                                                className:
                                                  Gq.mdwChargesInnerContentLeft,
                                                children: [
                                                  Object(bS.jsxs)('div', {
                                                    className:
                                                      Gq.mdwChargesInnerContentLeftHeader,
                                                    children: [
                                                      Object(bS.jsx)('div', {
                                                        className:
                                                          'mdw-charges-inner-content-left-header-text-left',
                                                        children: Object(bS.jsx)(
                                                          bF.a,
                                                          {
                                                            style: {
                                                              color: '#fff',
                                                              wordBreak:
                                                                'break-word',
                                                            },
                                                            variant: 'h6',
                                                            gutterBottom: true,
                                                            children: wM.category,
                                                          }
                                                        ),
                                                      }),
                                                      Object(bS.jsx)('div', {
                                                        className:
                                                          Gq.mdwInnerContentLeftHeaderTextRight,
                                                      }),
                                                    ],
                                                  }),
                                                  Object(bS.jsx)('div', {
                                                    className:
                                                      Gq.mdwInnerContentLeftBody,
                                                    style: {
                                                      flexDirection: 'row',
                                                      flexWrap: 'wrap',
                                                      flex: '0',
                                                      overflowY: 'unset',
                                                      paddingLeft: '5.5%',
                                                    },
                                                    children:
                                                      wM.charges &&
                                                      wM.charges.length > 0
                                                        ? wM.charges
                                                            .filter(function (
                                                              wg
                                                            ) {
                                                              return wz(wg.title)
                                                            })
                                                            .map(function (wg) {
                                                              return Object(
                                                                bS.jsx
                                                              )('div', {
                                                                onClick:
                                                                  function () {
                                                                    return (function (
                                                                      wW,
                                                                      wP,
                                                                      wV,
                                                                      wH
                                                                    ) {
                                                                      var wI = p4,
                                                                        wl =
                                                                          Object(
                                                                            x9.a
                                                                          )(pa),
                                                                        wm =
                                                                          wl.findIndex(
                                                                            function (
                                                                              wj
                                                                            ) {
                                                                              return (
                                                                                wj.cid.toString() ===
                                                                                wI.toString()
                                                                              )
                                                                            }
                                                                          ),
                                                                        wh =
                                                                          wl[wm]
                                                                            .charges,
                                                                        wB =
                                                                          Number(
                                                                            wl[wm]
                                                                              .months
                                                                          ),
                                                                        wN =
                                                                          Number(
                                                                            wl[wm]
                                                                              .fine
                                                                          ),
                                                                        wk =
                                                                          Number(
                                                                            wl[wm]
                                                                              .points
                                                                          ),
                                                                        wC = {
                                                                          id: wX(
                                                                            4
                                                                          ),
                                                                          title:
                                                                            wW,
                                                                          months:
                                                                            Number(
                                                                              wP
                                                                            ),
                                                                          fine: Number(
                                                                            wV
                                                                          ),
                                                                          points:
                                                                            Number(
                                                                              wH
                                                                            ),
                                                                        },
                                                                        wD =
                                                                          [].concat(
                                                                            Object(
                                                                              x9.a
                                                                            )(
                                                                              wh ||
                                                                                []
                                                                            ),
                                                                            [wC]
                                                                          )
                                                                      wl[
                                                                        wm
                                                                      ].charges = wD
                                                                      wl[
                                                                        wm
                                                                      ].months =
                                                                        wB +
                                                                        Number(wP)
                                                                      wl[
                                                                        wm
                                                                      ].fine =
                                                                        wN +
                                                                        Number(wV)
                                                                      wl[
                                                                        wm
                                                                      ].points =
                                                                        wk +
                                                                        Number(wH)
                                                                      pS(wl)
                                                                      LN(wD)
                                                                    })(
                                                                      wg.title,
                                                                      wg.months,
                                                                      wg.fine,
                                                                      wg.points
                                                                    )
                                                                  },
                                                                className:
                                                                  'component-paper cursor-pointer',
                                                                style: {
                                                                  width: '30%',
                                                                  borderBottom:
                                                                    '0px solid #fff',
                                                                  borderRadius:
                                                                    '0px',
                                                                  backgroundColor:
                                                                    ''.concat(
                                                                      wM.color
                                                                    ),
                                                                  border:
                                                                    '1px solid #000',
                                                                  marginRight:
                                                                    '2%',
                                                                  height:
                                                                    'fit-content',
                                                                },
                                                                children: Object(
                                                                  bS.jsx
                                                                )('div', {
                                                                  className:
                                                                    'main-container',
                                                                  children:
                                                                    Object(
                                                                      bS.jsx
                                                                    )('div', {
                                                                      className:
                                                                        'details',
                                                                      children:
                                                                        Object(
                                                                          bS.jsxs
                                                                        )('div', {
                                                                          className:
                                                                            'description',
                                                                          children:
                                                                            [
                                                                              Object(
                                                                                bS.jsx
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  className:
                                                                                    'flex-row',
                                                                                  style:
                                                                                    {
                                                                                      flexDirection:
                                                                                        'column',
                                                                                    },
                                                                                  children:
                                                                                    Object(
                                                                                      bS.jsx
                                                                                    )(
                                                                                      bF.a,
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            color:
                                                                                              '#fff',
                                                                                            wordBreak:
                                                                                              'break-word',
                                                                                            textAlign:
                                                                                              'center',
                                                                                          },
                                                                                        variant:
                                                                                          'body1',
                                                                                        gutterBottom:
                                                                                          true,
                                                                                        children:
                                                                                          wg.title,
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsxs
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  className:
                                                                                    'flex-row',
                                                                                  style:
                                                                                    {
                                                                                      flexDirection:
                                                                                        'row',
                                                                                      justifyContent:
                                                                                        'space-evenly',
                                                                                    },
                                                                                  children:
                                                                                    [
                                                                                      Object(
                                                                                        bS.jsxs
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            [
                                                                                              void 0 !==
                                                                                              wg.months
                                                                                                ? wg.months
                                                                                                : '0',
                                                                                              ' months',
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      Object(
                                                                                        bS.jsx
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            void 0 !==
                                                                                            wg.fine
                                                                                              ? wd(
                                                                                                  wg.fine
                                                                                                )
                                                                                              : '$0.0',
                                                                                        }
                                                                                      ),
                                                                                      Object(
                                                                                        bS.jsxs
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            [
                                                                                              void 0 !==
                                                                                              wg.points
                                                                                                ? wg.points
                                                                                                : '0',
                                                                                              ' point(s)',
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsx
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      marginTop:
                                                                                        '1%',
                                                                                      marginBottom:
                                                                                        '0.3%',
                                                                                    },
                                                                                  children:
                                                                                    Object(
                                                                                      bS.jsx
                                                                                    )(
                                                                                      xf.a,
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            borderColor:
                                                                                              '#30475e',
                                                                                          },
                                                                                        variant:
                                                                                          'fullWidth',
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsx
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  className:
                                                                                    'flex-row',
                                                                                  style:
                                                                                    {
                                                                                      flexDirection:
                                                                                        'column',
                                                                                    },
                                                                                  children:
                                                                                    Object(
                                                                                      bS.jsx
                                                                                    )(
                                                                                      bF.a,
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            color:
                                                                                              '#fff',
                                                                                            wordBreak:
                                                                                              'break-word',
                                                                                            textAlign:
                                                                                              'center',
                                                                                          },
                                                                                        variant:
                                                                                          'body2',
                                                                                        gutterBottom:
                                                                                          true,
                                                                                        children:
                                                                                          'as Accomplice',
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsxs
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  className:
                                                                                    'flex-row',
                                                                                  style:
                                                                                    {
                                                                                      flexDirection:
                                                                                        'row',
                                                                                      justifyContent:
                                                                                        'space-evenly',
                                                                                    },
                                                                                  children:
                                                                                    [
                                                                                      Object(
                                                                                        bS.jsxs
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            [
                                                                                              void 0 !==
                                                                                              wg.months
                                                                                                ? wg.months
                                                                                                : '0',
                                                                                              ' months',
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      Object(
                                                                                        bS.jsx
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            void 0 !==
                                                                                            wg.fine
                                                                                              ? wd(
                                                                                                  wg.fine
                                                                                                )
                                                                                              : '$0.0',
                                                                                        }
                                                                                      ),
                                                                                      Object(
                                                                                        bS.jsxs
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            [
                                                                                              void 0 !==
                                                                                              wg.points
                                                                                                ? wg.points
                                                                                                : '0',
                                                                                              ' point(s)',
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsx
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  style:
                                                                                    {
                                                                                      marginTop:
                                                                                        '1%',
                                                                                      marginBottom:
                                                                                        '0.3%',
                                                                                    },
                                                                                  children:
                                                                                    Object(
                                                                                      bS.jsx
                                                                                    )(
                                                                                      xf.a,
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            borderColor:
                                                                                              '#30475e',
                                                                                          },
                                                                                        variant:
                                                                                          'fullWidth',
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsx
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  className:
                                                                                    'flex-row',
                                                                                  style:
                                                                                    {
                                                                                      flexDirection:
                                                                                        'column',
                                                                                    },
                                                                                  children:
                                                                                    Object(
                                                                                      bS.jsx
                                                                                    )(
                                                                                      bF.a,
                                                                                      {
                                                                                        style:
                                                                                          {
                                                                                            color:
                                                                                              '#fff',
                                                                                            wordBreak:
                                                                                              'break-word',
                                                                                            textAlign:
                                                                                              'center',
                                                                                          },
                                                                                        variant:
                                                                                          'body2',
                                                                                        gutterBottom:
                                                                                          true,
                                                                                        children:
                                                                                          'as Accessory',
                                                                                      }
                                                                                    ),
                                                                                }
                                                                              ),
                                                                              Object(
                                                                                bS.jsxs
                                                                              )(
                                                                                'div',
                                                                                {
                                                                                  className:
                                                                                    'flex-row',
                                                                                  style:
                                                                                    {
                                                                                      flexDirection:
                                                                                        'row',
                                                                                      justifyContent:
                                                                                        'space-evenly',
                                                                                      marginBottom:
                                                                                        '0.3%',
                                                                                    },
                                                                                  children:
                                                                                    [
                                                                                      Object(
                                                                                        bS.jsx
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            '0 months',
                                                                                        }
                                                                                      ),
                                                                                      Object(
                                                                                        bS.jsx
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            '$0.00',
                                                                                        }
                                                                                      ),
                                                                                      Object(
                                                                                        bS.jsx
                                                                                      )(
                                                                                        bF.a,
                                                                                        {
                                                                                          style:
                                                                                            {
                                                                                              color:
                                                                                                '#fff',
                                                                                              wordBreak:
                                                                                                'break-word',
                                                                                              textAlign:
                                                                                                'center',
                                                                                            },
                                                                                          variant:
                                                                                            'body2',
                                                                                          gutterBottom:
                                                                                            true,
                                                                                          children:
                                                                                            '0 point(s)',
                                                                                        }
                                                                                      ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                }),
                                                              })
                                                            })
                                                        : Object(bS.jsx)(
                                                            bS.Fragment,
                                                            {}
                                                          ),
                                                  }),
                                                ],
                                              }),
                                            })
                                          })
                                        : Object(bS.jsx)(bS.Fragment, {}),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwAssignEvidenceModalContainer,
                              style: { display: pH ? '' : 'none' },
                              children: Object(bS.jsx)('div', {
                                className:
                                  Gq.mdwAssignEvidenceModalInnerContainer,
                                children: Object(bS.jsxs)('div', {
                                  className: 'mdw-details',
                                  style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignContent: 'space-between',
                                    position: 'relative',
                                    justifyContent: 'space-between',
                                    flex: '1 1',
                                    overflow: 'hidden',
                                  },
                                  children: [
                                    Object(bS.jsx)('div', {
                                      className: 'spinnerwrapper',
                                      style: {
                                        display: pZ ? 'flex' : 'none',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: '55%',
                                      },
                                      children: Object(bS.jsxs)('div', {
                                        className: 'lds-spinner',
                                        children: [
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                          Object(bS.jsx)('div', {}),
                                        ],
                                      }),
                                    }),
                                    Object(bS.jsxs)('div', {
                                      className: 'mdw-desc',
                                      style: { display: pZ ? 'none' : '' },
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            padding: '15px',
                                          },
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              color: '#fff',
                                              wordBreak: 'break-word',
                                            },
                                            variant: 'body1',
                                            gutterBottom: true,
                                            children: 'Assign Evidence',
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            paddingBottom: '0px',
                                            paddingTop: '0px',
                                          },
                                          children: Object(bS.jsx)('div', {
                                            className: 'input-wrapper',
                                            style: {
                                              width: '96%',
                                              marginBottom: '5%',
                                            },
                                            children: Object(bS.jsx)(xr.a, {
                                              fullWidth: true,
                                              sx: { width: '100%' },
                                              children: Object(bS.jsx)(xF.a, {
                                                sx: {
                                                  '& .MuiInput-root': {
                                                    color: 'white !important',
                                                  },
                                                  '& label.Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& Mui-focused': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:before':
                                                    {
                                                      borderColor:
                                                        'darkgray !important',
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  '& .MuiInput-underline:after': {
                                                    borderColor:
                                                      'white !important',
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .Mui-focused:after': {
                                                    color: 'darkgray !important',
                                                  },
                                                  '& .MuiInputAdornment-root': {
                                                    color: 'darkgray !important',
                                                  },
                                                },
                                                id: 'input-with-icon-textfield',
                                                label: 'Identifier',
                                                variant: 'standard',
                                                InputProps: {
                                                  startAdornment: Object(bS.jsx)(
                                                    xT.a,
                                                    {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-fingerprint fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }
                                                  ),
                                                },
                                              }),
                                            }),
                                          }),
                                        }),
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-end',
                                            paddingRight: '15px',
                                          },
                                          children: Object(bS.jsx)('div', {
                                            children: Object(bS.jsx)(xS.a, {
                                              size: 'small',
                                              color: 'success',
                                              variant: 'contained',
                                              children: 'Assign',
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsxs)('div', {
                                      className: 'mdw-desc',
                                      style: { display: pZ ? 'none' : '' },
                                      children: [
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'flex-start',
                                            padding: '15px',
                                          },
                                          children: Object(bS.jsx)(bF.a, {
                                            style: {
                                              color: '#fff',
                                              wordBreak: 'break-word',
                                            },
                                            variant: 'body1',
                                            gutterBottom: true,
                                            children: 'Add New Evidence',
                                          }),
                                        }),
                                        Object(bS.jsxs)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            padding: '8px',
                                            paddingBottom: '0px',
                                          },
                                          children: [
                                            Object(bS.jsx)('div', {
                                              className: 'input-wrapper',
                                              style: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xr.a, {
                                                fullWidth: true,
                                                sx: { width: '100%' },
                                                children: Object(bS.jsxs)(xF.a, {
                                                  id: 'outlined-select-currency',
                                                  variant: 'standard',
                                                  select: true,
                                                  label: 'Type',
                                                  defaultValue: 'other',
                                                  onChange: function (wM) {
                                                    return qR(wM.target.value)
                                                  },
                                                  sx: {
                                                    '& .MuiInput-root': {
                                                      color: 'white !important',
                                                    },
                                                    '& label.Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:after':
                                                      {
                                                        borderColor:
                                                          'white !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .Mui-focused:after': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInputAdornment-root': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  },
                                                  children: [
                                                    Object(bS.jsx)(
                                                      xR.a,
                                                      {
                                                        value: 'other',
                                                        children: 'Other',
                                                      },
                                                      'other'
                                                    ),
                                                    Object(bS.jsx)(
                                                      xR.a,
                                                      {
                                                        value: 'blood',
                                                        children: 'Blood',
                                                      },
                                                      'blood'
                                                    ),
                                                    Object(bS.jsx)(
                                                      xR.a,
                                                      {
                                                        value: 'casing',
                                                        children: 'Casing',
                                                      },
                                                      'casing'
                                                    ),
                                                    Object(bS.jsx)(
                                                      xR.a,
                                                      {
                                                        value: 'weapon',
                                                        children: 'Weapon',
                                                      },
                                                      'weapon'
                                                    ),
                                                    Object(bS.jsx)(
                                                      xR.a,
                                                      {
                                                        value: 'photo',
                                                        children: 'Photo',
                                                      },
                                                      'photo'
                                                    ),
                                                  ],
                                                }),
                                              }),
                                            }),
                                            Object(bS.jsx)('div', {
                                              className: 'input-wrapper',
                                              style: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xr.a, {
                                                fullWidth: true,
                                                sx: { width: '100%' },
                                                children: Object(bS.jsx)(xF.a, {
                                                  sx: {
                                                    '& .MuiInput-root': {
                                                      color: 'white !important',
                                                    },
                                                    '& label.Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:after':
                                                      {
                                                        borderColor:
                                                          'white !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .Mui-focused:after': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInputAdornment-root': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  },
                                                  id: 'input-with-icon-textfield',
                                                  label: 'Identifier',
                                                  variant: 'standard',
                                                  onChange: function (wM) {
                                                    return qf(wM.target.value)
                                                  },
                                                  value: qX,
                                                  InputProps: {
                                                    startAdornment: Object(
                                                      bS.jsx
                                                    )(xT.a, {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-pen fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }),
                                                  },
                                                }),
                                              }),
                                            }),
                                            Object(bS.jsx)('div', {
                                              className: 'input-wrapper',
                                              style: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xr.a, {
                                                fullWidth: true,
                                                sx: { width: '100%' },
                                                children: Object(bS.jsx)(xF.a, {
                                                  sx: {
                                                    '& .MuiInput-root': {
                                                      color: 'white !important',
                                                    },
                                                    '& label.Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:after':
                                                      {
                                                        borderColor:
                                                          'white !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .Mui-focused:after': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInputAdornment-root': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  },
                                                  id: 'input-with-icon-textfield',
                                                  label: 'Description',
                                                  variant: 'standard',
                                                  onChange: function (wM) {
                                                    return qE(wM.target.value)
                                                  },
                                                  value: qz,
                                                  InputProps: {
                                                    startAdornment: Object(
                                                      bS.jsx
                                                    )(xT.a, {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-clipboard fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }),
                                                  },
                                                }),
                                              }),
                                            }),
                                            Object(bS.jsx)('div', {
                                              className: 'input-wrapper',
                                              style: {
                                                width: '96%',
                                                marginBottom: '5%',
                                              },
                                              children: Object(bS.jsx)(xr.a, {
                                                fullWidth: true,
                                                sx: { width: '100%' },
                                                children: Object(bS.jsx)(xF.a, {
                                                  sx: {
                                                    '& .MuiInput-root': {
                                                      color: 'white !important',
                                                    },
                                                    '& label.Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& Mui-focused': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:before':
                                                      {
                                                        borderColor:
                                                          'darkgray !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .MuiInput-underline:after':
                                                      {
                                                        borderColor:
                                                          'white !important',
                                                        color:
                                                          'darkgray !important',
                                                      },
                                                    '& .Mui-focused:after': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                    '& .MuiInputAdornment-root': {
                                                      color:
                                                        'darkgray !important',
                                                    },
                                                  },
                                                  id: 'input-with-icon-textfield',
                                                  label: 'CID',
                                                  variant: 'standard',
                                                  onChange: function (wM) {
                                                    return qZ(wM.target.value)
                                                  },
                                                  value: qg,
                                                  InputProps: {
                                                    startAdornment: Object(
                                                      bS.jsx
                                                    )(xT.a, {
                                                      position: 'start',
                                                      children: Object(bS.jsx)(
                                                        'i',
                                                        {
                                                          className:
                                                            'fas fa-user fa-w-16 fa-fw',
                                                        }
                                                      ),
                                                    }),
                                                  },
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        Object(bS.jsx)('div', {
                                          className: 'flex-row',
                                          style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            alignItems: 'flex-end',
                                            paddingRight: '15px',
                                          },
                                          children: Object(bS.jsx)('div', {
                                            children: Object(bS.jsx)(xS.a, {
                                              onClick: function () {
                                                var wu = {
                                                    id: wX(4),
                                                    type: qT,
                                                    identifier: qX,
                                                    description: qz,
                                                    cid: qg,
                                                  },
                                                  wg = [].concat(
                                                    Object(x9.a)(px || []),
                                                    [wu]
                                                  )
                                                pW(true)
                                                xc('np-mdw:updateIncident', {
                                                  id: p7,
                                                  value: wg,
                                                  secondValue: wu,
                                                  type: 'evidence',
                                                  add: true,
                                                }).then(function (wZ) {
                                                  pW(false)
                                                  pb(wg)
                                                })
                                              },
                                              size: 'small',
                                              color: 'success',
                                              variant: 'contained',
                                              children: 'Create',
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: 'mdw-alignbottom',
                                      style: {
                                        display: pZ ? 'none' : 'flex',
                                        justifyContent: 'flex-end',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '8px',
                                        marginTop: '1%',
                                      },
                                      children: Object(bS.jsx)('div', {
                                        children: Object(bS.jsx)(xS.a, {
                                          onClick: function () {
                                            return pK(false)
                                          },
                                          size: 'small',
                                          color: 'warning',
                                          variant: 'contained',
                                          children: 'Close',
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            Object(bS.jsxs)('div', {
                              className: Gq.mdwHeader,
                              onMouseEnter: function () {
                                return qQ(true)
                              },
                              onMouseLeave: function () {
                                return qQ(false)
                              },
                              children: [
                                Object(bS.jsx)('div', {
                                  className: 'mdw-header-logo',
                                  children: Object(bS.jsx)('img', {
                                    alt: '',
                                    src:
                                      'police' === wa
                                        ? 'https://gta-assets.nopixel.net/images/mdw-lspd.png'
                                        : 'sheriff' === wa
                                        ? 'https://gta-assets.nopixel.net/images/mdw-bcso.png'
                                        : 'state' === wa
                                        ? 'https://gta-assets.nopixel.net/images/mdw-troopers.png'
                                        : 'ranger' === wa
                                        ? 'https://gta-assets.nopixel.net/images/mdw-ranger.png'
                                        : 'judge' === wa
                                        ? 'https://i.imgur.com/LnMPAZH.png'
                                        : 'https://gta-assets.nopixel.net/images/mdw-generic.png',
                                  }),
                                }),
                                Object(bS.jsxs)('div', {
                                  className: Gq.mdwHeaderText,
                                  children: [
                                    Object(bS.jsxs)('div', {
                                      children: [
                                        Object(bS.jsx)(bF.a, {
                                          style: {
                                            color: '#fff',
                                            wordBreak: 'break-word',
                                          },
                                          variant: 'h6',
                                          gutterBottom: true,
                                          children:
                                            'Random ass fucking quote shit, why is this shit even here?',
                                        }),
                                        Object(bS.jsx)(bF.a, {
                                          style: {
                                            color: '#fff',
                                            wordBreak: 'break-word',
                                            textAlign: 'right',
                                          },
                                          variant: 'body1',
                                          gutterBottom: true,
                                          children: '- Bruh Moment',
                                        }),
                                      ],
                                    }),
                                    Object(bS.jsx)('div', {
                                      className: Gq.mdwHeaderFlex,
                                    }),
                                    Object(bS.jsx)('div', {
                                      children: Object(bS.jsx)(bF.a, {
                                        style: {
                                          color: '#fff',
                                          wordBreak: 'break-word',
                                        },
                                        variant: 'body1',
                                        gutterBottom: true,
                                        children: GK
                                          ? 'Profile Not Found'
                                          : ''
                                              .concat(Gu, ' "')
                                              .concat(GS, '" ')
                                              .concat(GF, ' ')
                                              .concat(GS),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(bS.jsx)('div', {
                              className: Gq.mdwOuterBody,
                              children: Object(bS.jsxs)('div', {
                                className: Gq.mdwInnerBody,
                                style: { zIndex: '100' },
                                children: [
                                  Object(bS.jsx)('div', {
                                    className: Gq.mdwTabsOuterContainer,
                                    children: Object(bS.jsx)('div', {
                                      className: Gq.mdwTabsInnerContainer,
                                      children: Object(bS.jsxs)('div', {
                                        className: Gq.mdwTabsFlexContainer,
                                        children: [
                                          Object(bS.jsx)(xd.b, {
                                            to: '/dashboard',
                                            onClick: function () {
                                              return wf(1)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                1 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display: GK ? 'none' : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Dashboard',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/incidents',
                                            onClick: function () {
                                              return wf(2)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                2 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Incidents',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/incidentsems',
                                            onClick: function () {
                                              return wf(11)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                11 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  'ems' === wa ? '' : 'none',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Incidents',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/profiles',
                                            onClick: function () {
                                              return wf(3)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                3 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Profiles',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/dmv',
                                            onClick: function () {
                                              return wf(4)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                4 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'DMV',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/reports',
                                            onClick: function () {
                                              return wf(5)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                5 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Reports',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/evidence',
                                            onClick: function () {
                                              return wf(6)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                6 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Evidence',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/properties',
                                            onClick: function () {
                                              return wf(7)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                7 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Properties',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/charges',
                                            onClick: function () {
                                              return wf(8)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                8 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Charges',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/staff',
                                            onClick: function () {
                                              return wf(9)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                9 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  'police' === wa && '9' === Gd
                                                    ? ''
                                                    : 'none',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Staff',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/legislation',
                                            onClick: function () {
                                              return wf(10)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                10 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Legislation',
                                              }),
                                            }),
                                          }),
                                          Object(bS.jsx)(xd.b, {
                                            to: '/businesses',
                                            onClick: function () {
                                              return wf(11)
                                            },
                                            style: {
                                              color: '#fff',
                                              textDecoration: 'none',
                                            },
                                            children: Object(bS.jsx)('div', {
                                              className:
                                                11 === Gh
                                                  ? 'mdw-tab active-tab'
                                                  : 'mdw-tab',
                                              style: {
                                                display:
                                                  GK || 'ems' === wa
                                                    ? 'none'
                                                    : '',
                                              },
                                              children: Object(bS.jsx)(bF.a, {
                                                style: {
                                                  color: '#fff',
                                                  wordBreak: 'break-word',
                                                },
                                                variant: 'h6',
                                                gutterBottom: true,
                                                children: 'Businesses',
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/dashboard',
                                      render: function () {
                                        return Object(bS.jsx)(bW, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/incidents',
                                      render: function () {
                                        return Object(bS.jsx)(bN, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/incidentsems',
                                      render: function () {
                                        return Object(bS.jsx)(bC, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/profiles',
                                      render: function () {
                                        return Object(bS.jsx)(bv, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/dmv',
                                      render: function () {
                                        return Object(bS.jsx)(bY, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/evidence',
                                      render: function () {
                                        return Object(bS.jsx)(bO, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/properties',
                                      render: function () {
                                        return Object(bS.jsx)(G0, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/charges',
                                      render: function () {
                                        return Object(bS.jsx)(G2, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/businesses',
                                      render: function () {
                                        return Object(bS.jsx)(G4, {})
                                      },
                                    }),
                                  }),
                                  Object(bS.jsx)(xo.c, {
                                    children: Object(bS.jsx)(xo.a, {
                                      path: '/staff',
                                      render: function () {
                                        return Object(bS.jsx)(Gb, {})
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              })
            )
          }
        x2(730)
        x2(731)
        x2(732)
        x2(733)
        x7.a.render(
          Object(bS.jsx)(xd.a, {
            basename: '/',
            children: Object(bS.jsx)(xz.a, { children: Object(bS.jsx)(GL, {}) }),
          }),
          document.getElementById('root')
        )
      },
    },
    [[734, 1, 2]],
  ])
  