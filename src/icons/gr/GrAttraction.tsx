

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrAttraction = (props: IconProps) => {

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
          <Path  fill="none" d="M13,2 L14.5,2.5 L13,3 L13,2 Z M14,18 L15,23 L13,23 L14,18 Z M14,16.5 L16,23 L12,23 L14,16.5 Z M12,6 L21,11 L21,13 L3,13 L3,11 L12,6 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z M4.5,13 L19.5,13 C19.5,17.1666667 21,23 21,23 L3,23 C3,23 4.5,17.1666667 4.5,13 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

