

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiSplitV = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10.646 13.146l0.707 0.707-2.853 2.854-2.854-2.854 0.707-0.707 1.647 1.647v-3.772h1v3.772l1.646-1.647zM8 2.207v3.772h1v-3.772l1.646 1.646 0.707-0.707-2.853-2.853-2.854 2.853 0.707 0.707 1.647-1.646zM0 8v1h17v-1h-17z" />
        </G>
      </Svg>
    );
  }

