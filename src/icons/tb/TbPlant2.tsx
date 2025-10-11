

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbPlant2 = (props: IconProps) => {

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
          <Path  d="M2 9a10 10 0 1 0 20 0" />
          <Path  d="M12 19a10 10 0 0 1 10 -10" />
          <Path  d="M2 9a10 10 0 0 1 10 10" />
          <Path  d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
          <Path  d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
        </G>
      </Svg>
    );
  }

