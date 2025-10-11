

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrNavigate = (props: IconProps) => {

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
          <Path  fill="none" d="M20,11 L22,8 L20,5 L12,5 L12,11 L20,11 Z M12,24 L12,0 M4,2 L2,5 L4,8 L12,8 L12,2 L4,2 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

