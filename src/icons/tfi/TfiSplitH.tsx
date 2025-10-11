

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiSplitH = (props: IconProps) => {

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
          <Path  d="M2.207 8h3.772v1h-3.772l1.646 1.646-0.707 0.707-2.853-2.853 2.854-2.854 0.707 0.707-1.647 1.647zM13.854 5.646l-0.707 0.707 1.646 1.647h-3.772v1h3.772l-1.646 1.646 0.707 0.707 2.853-2.853-2.853-2.854zM8 17h1v-17h-1v17z" />
        </G>
      </Svg>
    );
  }

