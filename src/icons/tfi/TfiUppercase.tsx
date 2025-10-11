

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiUppercase = (props: IconProps) => {

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
          <Path  d="M7 4h1v2h-1v-1h-2v8h1v1h-3v-1h1v-8h-2v1h-1v-2h6zM15 4h-6v2h1v-1h2v8h-1v1h3v-1h-1v-8h2v1h1v-2h-1z" />
        </G>
      </Svg>
    );
  }

