

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiSquareChevLeft = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M11.21,12l2.64,2.65a.495.495,0,0,1-.7.7c-.13-.12-.25-.24-.38-.37-.87-.87-1.75-1.75-2.62-2.63a.492.492,0,0,1,0-.7l3-3a.495.495,0,0,1,.7.7Z" />
          <Path  d="M18.437,20.939H5.562a2.5,2.5,0,0,1-2.5-2.5V5.566a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.439A2.5,2.5,0,0,1,18.437,20.939ZM5.562,4.066a1.5,1.5,0,0,0-1.5,1.5V18.439a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.566a1.5,1.5,0,0,0-1.5-1.5Z" />
        </G>
      </Svg>
    );
  }

