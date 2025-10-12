

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCodeSandbox = (props: IconProps) => {

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
          <Path  fill="none" stroke="#444" d="M12,1.5 L3,6.5 L3,17.5 L12,22.5 L21,17.5 L21,6.5 L12,1.5 Z M12,22.5 L12,11.5 M21,6.5 L12,11.5 M12,11.5 L3,6.5 M21,17.5 L21,12 L16.5,14.5 L16.5,20 L21,17.5 Z M3,17.5 L3,12 L7.5,14.5 L7.5,20 L3,17.5 Z M12,1.5 L7.5,4 L12,6.5 L16.5,4 L12,1.5 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

