

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTextUnderlineThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M196,224a4,4,0,0,1-4,4H64a4,4,0,0,1,0-8H192A4,4,0,0,1,196,224Zm-68-28a60.07,60.07,0,0,0,60-60V56a4,4,0,0,0-8,0v80a52,52,0,0,1-104,0V56a4,4,0,0,0-8,0v80A60.07,60.07,0,0,0,128,196Z" />
        </G>
      </Svg>
    );
  }

