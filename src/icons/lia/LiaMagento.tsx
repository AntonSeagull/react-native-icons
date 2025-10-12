

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LiaMagento = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 16, 16)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M 16 3.2265625 L 5 10.173828 L 5 22.441406 L 8 24.154297 L 8 11.826172 L 16 6.7734375 L 24 11.826172 L 24 24.150391 L 27 22.4375 L 27 10.173828 L 16 3.2265625 z M 14 11.578125 L 11 13.464844 L 11 25.869141 L 16 28.728516 L 21 25.869141 L 21 13.484375 L 18 11.599609 L 18 24.130859 L 16 25.271484 L 14 24.130859 L 14 11.578125 z" />
        </G>
      </Svg>
    );
  }

