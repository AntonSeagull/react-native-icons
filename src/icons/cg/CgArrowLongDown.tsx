

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgArrowLongDown = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13.0125 19.162L14.8246 17.3398L16.2427 18.7501L12.012 23.0046L7.75726 18.7739L9.16751 17.3557L11.0126 19.1905L10.998 0.997021L12.998 0.995422L13.0125 19.162Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

