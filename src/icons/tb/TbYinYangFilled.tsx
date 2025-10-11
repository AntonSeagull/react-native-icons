

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbYinYangFilled = (props: IconProps) => {

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
          <Path  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-9 1.732a8 8 0 0 0 4 14.928l.2 -.005a4 4 0 0 0 0 -7.99l-.2 -.005a4 4 0 0 1 -.2 -7.995l.2 -.005a7.995 7.995 0 0 0 -4 1.072zm4 1.428a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0 -3z" />
          <Path  d="M12 14.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0 -3z" />
        </G>
      </Svg>
    );
  }

