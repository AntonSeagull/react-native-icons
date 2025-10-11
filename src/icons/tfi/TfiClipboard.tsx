

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiClipboard = (props: IconProps) => {

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
          <Path  d="M16 2v15h-15v-15h2.244v1h-1.244v13h13v-13h-1.278v-1h2.278zM13 5h-9v-4h3.085c0.207-0.582 0.763-1 1.415-1s1.208 0.418 1.415 1h3.085v4zM12 2h-3v-0.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v0.5h-3v2h7v-2z" />
        </G>
      </Svg>
    );
  }

