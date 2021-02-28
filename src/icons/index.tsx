import React from "react";

interface Props {
  width: number;
  height: number;
  color?: string;
}

export const Logo = (props:Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 1016 197"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M134.835 100.257C126.049 74.2704 103.577 55.8671 69.4519 55.8671C31.073 55.8671 0 87.4025 0 126.429C0 165.455 31.073 196.99 69.4519 196.99C105.981 196.99 127.714 177.847 135.575 151.028L93.4966 138.359C89.9824 147.791 82.1216 154.358 72.1339 154.358C58.262 154.358 46.9795 141.873 46.9795 126.429C46.9795 110.985 58.262 98.5 72.1339 98.5C82.0291 98.5 89.7049 104.789 93.3116 114.037L134.835 100.257Z" fill={props.color ? props.color : "#5C38FF"}/>
    <path d="M214.922 55.8671C175.618 55.8671 143.713 87.4025 143.713 126.429C143.713 165.455 175.618 196.99 214.922 196.99C256.723 196.99 286.131 165.455 286.131 126.429C286.131 87.4025 257.462 55.8671 214.922 55.8671ZM215.199 154.358C201.512 154.358 190.507 141.873 190.507 126.429C190.507 110.985 201.605 98.5 215.199 98.5C228.886 98.5 239.891 110.985 239.891 126.429C239.891 141.873 228.886 154.358 215.199 154.358Z" fill={props.color ? props.color : "#5C38FF"}/>
    <path d="M379.628 56.6069C349.664 56.6069 341.434 74.8253 341.434 74.8253V59.4737H296.859V192.459H344.023V114.499C344.023 106.453 350.774 98.1301 361.409 98.1301C368.622 98.1301 377.963 103.124 377.963 118.198V192.551H425.127V113.112C425.22 67.9818 401.823 56.6069 379.628 56.6069Z" fill={props.color ? props.color : "#5C38FF"}/>
    <path d="M534.53 0.00952148V70.9411C526.67 62.0631 515.757 56.8843 501.145 56.8843C466.096 56.8843 437.705 87.8649 437.705 126.151C437.705 164.438 466.096 195.418 501.145 195.418C517.052 195.418 528.612 188.852 536.473 178.125V192.551H581.048V0.00952148H534.53ZM510.393 153.71C494.302 153.71 485.516 141.225 485.516 125.689C485.516 110.245 494.302 97.6677 510.393 97.6677C526.207 97.6677 535.27 110.06 535.27 125.689C535.27 142.983 523.71 153.71 510.393 153.71Z" fill={props.color ? props.color : "#5C38FF"}/>
    <path d="M677.318 59.4737V137.434C677.318 145.479 670.567 153.803 659.932 153.803C652.719 153.803 643.378 148.809 643.378 133.735V59.3812H596.214V138.821C596.214 183.858 623.68 195.233 641.899 195.233C671.122 195.233 676.301 184.228 680.648 178.864V192.459H724.575V192.366V59.4737H677.318Z" fill={props.color ? props.color : "#5C38FF"}/>
    <path d="M1015.7 101.922H972.697V59.0113H925.533V101.922H882.622V149.179H925.533V192.089H972.697V149.179H1015.7V101.922Z" fill={props.color ? props.color : "#5C38FF"}/>
    <path d="M868.75 126.429C868.75 87.495 849.515 55.8671 802.073 55.8671C765.266 55.8671 735.395 87.4025 735.395 126.429C735.395 165.455 765.266 196.99 802.073 196.99C839.065 196.99 857.098 181.084 864.496 157.964L828.799 145.942C825.1 153.988 816.315 159.536 806.142 159.536C789.866 159.536 781.542 149.549 781.542 137.249H868.38C868.565 133.735 868.75 130.128 868.75 126.429ZM781.45 110.8C781.45 100.072 791.068 91.2866 802.998 91.2866C817.239 91.2866 824.545 99.9797 824.545 110.8H781.45Z" fill={props.color ? props.color : "#5C38FF"}/>
  </svg>
)

export const DataTableIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="36"
      y="36"
      width="448"
      height="448"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="36"
      y="109"
      width="150"
      height="375"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="36"
      y="109"
      width="448"
      height="75"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="36"
      y="184"
      width="448"
      height="75"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="36"
      y="259"
      width="448"
      height="75"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="36"
      y="334"
      width="448"
      height="75"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="36"
      y="409"
      width="448"
      height="75"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="334"
      y="109"
      width="150"
      height="375"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
  </svg>
);

export const GraphStyleIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M143.089 408.067C219.863 475.579 315.435 500.876 387.642 477.473C412.154 469.15 425.223 442.692 416.83 418.385C416.076 416.195 415.156 414.068 414.08 412.011L381.858 349.424C375.924 337.913 378.149 323.925 387.359 314.776C396.821 305.393 411.392 303.343 423.117 309.734L439.337 318.586C454.528 326.925 473.657 321.478 482.066 306.414C485.65 299.993 486.836 292.518 485.414 285.318C473.964 232.341 448.643 183.291 412.004 143.102L379.782 111.15C279.771 23.7814 148.268 7.85296 77.947 77.5858C9.45716 145.502 22.9345 270.979 105.045 369.103L143.089 408.067Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M320.706 136.103C320.706 150.795 308.795 162.706 294.103 162.706C279.411 162.706 267.5 150.795 267.5 136.103C267.5 121.411 279.411 109.5 294.103 109.5C308.795 109.5 320.706 121.411 320.706 136.103Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M189.706 102.103C189.706 116.795 177.795 128.706 163.103 128.706C148.411 128.706 136.5 116.795 136.5 102.103C136.5 87.4106 148.411 75.5 163.103 75.5C177.795 75.5 189.706 87.4106 189.706 102.103Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M121.706 192.103C121.706 206.795 109.795 218.706 95.103 218.706C80.4106 218.706 68.5 206.795 68.5 192.103C68.5 177.411 80.4106 165.5 95.103 165.5C109.795 165.5 121.706 177.411 121.706 192.103Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M168.706 307.103C168.706 321.795 156.795 333.706 142.103 333.706C127.411 333.706 115.5 321.795 115.5 307.103C115.5 292.411 127.411 280.5 142.103 280.5C156.795 280.5 168.706 292.411 168.706 307.103Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M286.706 401.103C286.706 415.795 274.795 427.706 260.103 427.706C245.411 427.706 233.5 415.795 233.5 401.103C233.5 386.411 245.411 374.5 260.103 374.5C274.795 374.5 286.706 386.411 286.706 401.103Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M425.18 225.84C425.18 238.178 415.178 248.18 402.84 248.18C390.502 248.18 380.5 238.178 380.5 225.84C380.5 213.502 390.502 203.5 402.84 203.5C415.178 203.5 425.18 213.502 425.18 225.84Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
  </svg>
);

export const GraphTypeIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="36"
      y="219"
      width="64"
      height="265"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="132"
      y="267"
      width="64"
      height="217"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="228"
      y="187"
      width="64"
      height="297"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="324"
      y="331"
      width="64"
      height="153"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <rect
      x="420"
      y="214"
      width="64"
      height="270"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M367.825 223L440.724 84M343.423 227L273.435 114M244 109.353L179.193 184M145 186.4L86 139.511"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <circle
      cx="68"
      cy="125"
      r="31"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <circle
      cx="164"
      cy="202"
      r="31"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <circle
      cx="260"
      cy="91"
      r="31"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <circle
      cx="356"
      cy="249"
      r="31"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <circle
      cx="452"
      cy="63"
      r="31"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
  </svg>
);

export const BarGraphIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="36"
      y="197"
      width="64"
      height="287"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="132"
      y="235"
      width="64"
      height="249"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="228"
      y="52"
      width="64"
      height="432"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="324"
      y="350"
      width="64"
      height="134"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="420"
      y="142"
      width="64"
      height="342"
      fill={props.color ? props.color : "#AD9BFF"}
    />
  </svg>
);

export const LineGraphIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M368.825 327L441.724 188M344.423 331L274.435 218M245 213.353L180.193 288M146 290.4L87 243.511"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
      strokeLinejoin="round"
    />
    <circle
      cx="69"
      cy="229"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="165"
      cy="306"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="261"
      cy="195"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="357"
      cy="353"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="453"
      cy="167"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
  </svg>
);

export const SettingsIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="260"
      cy="267"
      r="66.5"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
    />
    <path
      d="M448.696 219.826H413.372C410.409 210.155 406.532 200.815 401.824 191.918L426.779 166.963C432.119 161.623 435.062 154.509 435.062 146.933C435.062 139.366 432.119 132.252 426.779 126.912L400.078 100.212C389.408 89.5412 370.727 89.5129 360.037 100.212L335.082 125.167C326.194 120.459 316.845 116.591 307.174 113.619V78.3043C307.174 62.6992 294.475 50 278.87 50H241.13C225.525 50 212.826 62.6992 212.826 78.3043V113.628C203.155 116.6 193.815 120.468 184.918 125.176L159.954 100.221C148.915 89.1827 130.951 89.1827 119.912 100.221L93.2025 126.922C82.1732 137.96 82.1732 155.924 93.2025 166.963L118.157 191.927C113.45 200.815 109.581 210.165 106.609 219.836H71.3043C55.6992 219.836 43 232.535 43 248.14V285.879C43 301.475 55.6992 314.174 71.3043 314.174H106.628C109.6 323.845 113.468 333.185 118.176 342.082L93.2213 367.046C82.1827 378.085 82.1827 396.049 93.2213 407.088L119.922 433.798C130.96 444.827 148.924 444.827 159.963 433.798L184.927 408.843C193.815 413.55 203.165 417.419 212.836 420.391V455.696C212.836 471.301 225.535 484 241.14 484H278.879C294.484 484 307.183 471.301 307.183 455.696V420.372C316.854 417.4 326.204 413.532 335.091 408.824L360.046 433.788C370.745 444.478 389.426 444.459 400.088 433.788L426.788 407.088C432.128 401.748 435.072 394.634 435.072 387.067C435.072 379.491 432.128 372.387 426.788 367.046L401.833 342.082C406.541 333.194 410.409 323.845 413.381 314.174H448.696C464.301 314.174 477 301.475 477 285.87V248.13C477 232.525 464.301 219.826 448.696 219.826Z"
      stroke={props.color ? props.color : "#2c2c2c"}
      strokeWidth="15"
      strokeLinejoin="round"
    />
  </svg>
);

export const LineAndBarChartIcon = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="36"
      y="219"
      width="64"
      height="265"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="132"
      y="267"
      width="64"
      height="217"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="228"
      y="187"
      width="64"
      height="297"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="324"
      y="331"
      width="64"
      height="153"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <rect
      x="420"
      y="214"
      width="64"
      height="270"
      fill={props.color ? props.color : "#AD9BFF"}
    />
    <path
      d="M367.825 223L440.724 84M343.423 227L273.435 114M244 109.353L179.193 184M145 186.4L86 139.511"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
      strokeLinejoin="round"
    />
    <circle
      cx="68"
      cy="125"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="164"
      cy="202"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="260"
      cy="91"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="356"
      cy="249"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
    <circle
      cx="452"
      cy="63"
      r="31"
      stroke={props.color ? props.color : "#AD9BFF"}
      strokeWidth="15"
    />
  </svg>
);

export const Tick = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 520 520"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.8059 272.743C17.2542 274.306 17.2574 276.829 18.8131 278.387L183.113 443.001L501.149 125.278C502.72 123.709 502.712 121.16 501.131 119.601L460.758 79.7862C459.193 78.2432 456.677 78.2513 455.123 79.8041L183.113 351.498L64.2691 232.656C62.7031 231.09 60.1627 231.094 58.6023 232.666L18.8059 272.743Z"
      fill={props.color ? props.color : "#2c2c2c"}
    />
  </svg>
);


export const GraphGeneric = (props: Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 201 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="64" y="19.4678" width="8.56584" height="38.1569" fill="#5C38FF"/>
    <rect x="76.8489" y="24.5293" width="8.56584" height="33.0953" fill="#5C38FF"/>
    <rect x="89.6975" width="8.56584" height="57.6247" fill="#5C38FF"/>
    <rect x="102.546" y="39.7142" width="8.56584" height="17.9104" fill="#5C38FF"/>
    <rect x="115.395" y="12.0699" width="8.56584" height="45.5547" fill="#5C38FF"/>
    <path d="M184.589 38.0109L193.753 20.537M181.521 38.5137L172.723 24.3083M169.022 23.7242L160.875 33.1081M156.577 33.4098L149.16 27.5153" stroke="#5C38FF" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="146.897" cy="25.6912" r="3.89705" stroke="#5C38FF" strokeWidth="2"/>
    <circle cx="158.965" cy="35.3709" r="3.89705" stroke="#5C38FF" strokeWidth="2"/>
    <circle cx="171.034" cy="21.417" r="3.89705" stroke="#5C38FF" strokeWidth="2"/>
    <circle cx="183.102" cy="41.2794" r="3.89705" stroke="#5C38FF" strokeWidth="2"/>
    <circle cx="195.17" cy="17.8971" r="3.89705" stroke="#5C38FF" strokeWidth="2"/>
    <rect x="5.23682" y="45.9904" width="27.1364" height="1.90431" fill="#C4C4C4"/>
    <rect x="19.9951" y="29.3278" width="19.0431" height="1.90431" fill="#C4C4C4"/>
    <rect x="10.4736" y="11.7128" width="20.9474" height="1.90431" fill="#C4C4C4"/>
    <circle cx="10.4737" cy="12.6649" r="5.23685" fill="#927BFD"/>
    <circle cx="19.9949" cy="30.2799" r="5.23685" fill="#927BFD"/>
    <circle cx="31.4212" cy="46.4666" r="6.66508" fill="#5C38FF"/>
    <circle cx="32.3733" cy="12.6651" r="6.66508" fill="#5C38FF"/>
    <circle cx="39.0384" cy="30.2799" r="6.66508" fill="#5C38FF"/>
    <circle cx="5.23685" cy="46.4666" r="5.23685" fill="#927BFD"/>
  </svg>
)

export const DeleteIcon = (props:Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 427 427"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <g>
    <path d="M272.398 154.703C266.875 154.703 262.398 159.179 262.398 164.703V353.703C262.398 359.222 266.875 363.703 272.398 363.703C277.922 363.703 282.398 359.222 282.398 353.703V164.703C282.398 159.179 277.922 154.703 272.398 154.703Z" fill={props.color ? props.color : "#AD9BFF"}/>
    <path d="M154.399 154.703C148.875 154.703 144.399 159.179 144.399 164.703V353.703C144.399 359.222 148.875 363.703 154.399 363.703C159.922 363.703 164.399 359.222 164.399 353.703V164.703C164.399 159.179 159.922 154.703 154.399 154.703Z" fill={props.color ? props.color : "#AD9BFF"}/>
    <path d="M68.3989 127.121V373.499C68.3989 388.061 73.7387 401.737 83.0668 411.549C92.3519 421.389 105.274 426.975 118.797 426.999H308C321.527 426.975 334.449 421.389 343.73 411.549C353.058 401.737 358.398 388.061 358.398 373.499V127.121C376.941 122.199 388.956 104.285 386.476 85.2575C383.992 66.2341 367.785 52.0037 348.597 51.9998H297.398V39.4998C297.457 28.9882 293.3 18.8944 285.859 11.4687C278.418 4.04683 268.308 -0.0859661 257.797 -2.88595e-05H169C158.488 -0.0859661 148.379 4.04683 140.938 11.4687C133.496 18.8944 129.34 28.9882 129.399 39.4998V51.9998H78.1996C59.0122 52.0037 42.8052 66.2341 40.3208 85.2575C37.8404 104.285 49.8559 122.199 68.3989 127.121V127.121ZM308 406.999H118.797C101.7 406.999 88.3988 392.311 88.3988 373.499V128H338.398V373.499C338.398 392.311 325.097 406.999 308 406.999ZM149.399 39.4998C149.332 34.2928 151.379 29.2811 155.074 25.6054C158.766 21.9296 163.789 19.9101 169 19.9999H257.797C263.008 19.9101 268.031 21.9296 271.722 25.6054C275.418 29.2772 277.465 34.2928 277.398 39.4998V51.9998H149.399V39.4998ZM78.1996 71.9997H348.597C358.539 71.9997 366.597 80.0583 366.597 89.9997C366.597 99.9411 358.539 108 348.597 108H78.1996C68.2582 108 60.1997 99.9411 60.1997 89.9997C60.1997 80.0583 68.2582 71.9997 78.1996 71.9997V71.9997Z" fill={props.color ? props.color : "#AD9BFF"}/>
    <path d="M213.398 154.703C207.875 154.703 203.398 159.179 203.398 164.703V353.703C203.398 359.222 207.875 363.703 213.398 363.703C218.922 363.703 223.398 359.222 223.398 353.703V164.703C223.398 159.179 218.922 154.703 213.398 154.703Z" fill={props.color ? props.color : "#AD9BFF"}/>
  </g>
  </svg>
)

export const DuplicateIcon = (props:Props) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 427 427"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <g>
    <path d="M306.219 0C304.565 0 146.094 0 146.094 0C117.858 0 92.719 25.9004 92.719 53.3753L77.2935 53.7355C49.0714 53.7355 26 79.2751 26 106.75V373.625C26 401.1 51.1397 427 79.3753 427H279.532C307.767 427 332.906 401.1 332.906 373.625H346.25C374.486 373.625 399.625 347.726 399.625 320.251V107.071L306.219 0ZM279.532 400.313H79.3753C65.3644 400.313 52.688 387.224 52.688 373.625V106.75C52.688 93.153 64.097 80.5028 78.1079 80.5028L92.719 80.0627V320.251C92.719 347.726 117.858 373.625 146.094 373.625H306.219C306.219 387.223 293.542 400.313 279.532 400.313ZM372.938 320.251C372.938 333.847 360.261 346.937 346.25 346.937H146.094C132.083 346.937 119.406 333.848 119.406 320.251V53.3753C119.406 39.7783 132.083 26.688 146.094 26.688H279.532C279.317 57.4186 279.532 80.3966 279.532 80.3966C279.532 108.125 304.484 133.438 332.906 133.438C332.906 133.438 347.078 133.438 372.938 133.438V320.251ZM332.906 106.75C318.696 106.75 306.219 80.9302 306.219 67.0792C306.219 67.0792 306.219 53.0414 306.219 27.1013V27.0744L372.938 106.75H332.906ZM306.219 187.053H186.125C178.76 187.053 172.782 193.018 172.782 200.383C172.782 207.749 178.76 213.714 186.125 213.714H306.219C313.585 213.714 319.563 207.749 319.563 200.383C319.563 193.018 313.585 187.053 306.219 187.053ZM306.219 253.705H186.125C178.76 253.705 172.782 259.67 172.782 267.035C172.782 274.401 178.76 280.366 186.125 280.366H306.219C313.585 280.366 319.563 274.401 319.563 267.035C319.563 259.67 313.585 253.705 306.219 253.705Z" fill={props.color ? props.color : "#333333"}/>
  </g>
  </svg>
)