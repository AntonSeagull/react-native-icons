

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtHeight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M14 12h2l-2.5 3-2.5-3h2v-8h-2l2.5-3 2.5 3h-2zM10 1v4l-1-2h-3v11h2v1h-6v-1h2v-11h-3l-1 2v-4z" />
        </G>
      </Svg>
    );
  }

