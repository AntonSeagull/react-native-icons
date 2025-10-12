

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBalloonOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M414.11,153.82C429.66,264.4,345.85,357.09,282.54,366s-169.48-57.5-185-167.68a159.82,159.82,0,1,1,316.53-44.49Z" fill="none" strokeMiterlimit="10" strokeWidth="32" />
          <Path  d="M236.06,308.05c-32.83-13-67.08-43.1-82.27-85.46" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
          <Path  d="M367.7,495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" />
        </G>
      </Svg>
    );
  }

