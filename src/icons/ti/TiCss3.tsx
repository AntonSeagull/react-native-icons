

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiCss3 = (props: IconProps) => {

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
          <Path  d="M5.7 3.4l-.6 3.2h12.3l-.4 2.1h-12.3l-.6 3.2h12.3l-.7 3.6-5 1.7-4.3-1.7.3-1.6h-3l-.7 3.8 7.1 2.9 8.2-2.9 1.1-5.8.2-1.2 1.4-7.3h-15.3z" />
        </G>
      </Svg>
    );
  }

