

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiSquareChevRight = (props: IconProps) => {

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
          <Path  d="M10.85,15.35a.495.495,0,0,1-.7-.7L12.79,12,10.15,9.35a.495.495,0,0,1,.7-.7l3,3a.492.492,0,0,1,0,.7Z" />
          <Path  d="M18.437,20.937H5.563a2.5,2.5,0,0,1-2.5-2.5V5.563a2.5,2.5,0,0,1,2.5-2.5H18.437a2.5,2.5,0,0,1,2.5,2.5V18.437A2.5,2.5,0,0,1,18.437,20.937ZM5.563,4.063a1.5,1.5,0,0,0-1.5,1.5V18.437a1.5,1.5,0,0,0,1.5,1.5H18.437a1.5,1.5,0,0,0,1.5-1.5V5.563a1.5,1.5,0,0,0-1.5-1.5Z" />
        </G>
      </Svg>
    );
  }

