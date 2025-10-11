

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrServer = (props: IconProps) => {

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
          <Path  fill="none" d="M14,19 L15,19 L15,18 L14,18 L14,19 Z M5,23 L19,23 L19,1 L5,1 L5,23 Z M8,5 L16,5 L8,5 Z M8,9 L16,9 L8,9 Z M8,13 L16,13 L8,13 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

