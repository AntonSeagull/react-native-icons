

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormTrash = (props: IconProps) => {

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
          <Path  fill="none" d="M7.5,9 L16.5,9 L16.5,19 L7.5,19 L7.5,9 Z M5,9 L19,9 M9.36363636,6 L14.3636364,6 L14.3636364,9 L9.36363636,9 L9.36363636,6 Z M10.5455,11 L10.5455,17 M13.5455,11 L13.5455,17" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

