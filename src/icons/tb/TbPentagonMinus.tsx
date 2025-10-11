

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPentagonMinus = (props: IconProps) => {

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
          <Path  d="M12.5 21q -1.82 0 -5.458 .005a1.98 1.98 0 0 1 -1.881 -1.367l-3.064 -9.43a1.98 1.98 0 0 1 .719 -2.212l8.021 -5.828a1.98 1.98 0 0 1 2.326 0l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-1.559 4.792" />
          <Path  d="M16 19h6" />
        </G>
      </Svg>
    );
  }

