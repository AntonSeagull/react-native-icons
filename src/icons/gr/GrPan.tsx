

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrPan = (props: IconProps) => {

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
          <Path  fill="none" d="M8.5,5.5 L12,2 L15.5,5.5 M22,12 L2,12 M5.5,8.5 L2,12 L5.5,15.5 M18.5,15.5 L22,12 L18.5,8.5 M12,22 L12,2 M8.5,18.5 L12,22 L15.5,18.5" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

