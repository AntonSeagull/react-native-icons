

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSunHigh = (props: IconProps) => {

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
          <Path  d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
          <Path  d="M6.343 17.657l-1.414 1.414" />
          <Path  d="M6.343 6.343l-1.414 -1.414" />
          <Path  d="M17.657 6.343l1.414 -1.414" />
          <Path  d="M17.657 17.657l1.414 1.414" />
          <Path  d="M4 12h-2" />
          <Path  d="M12 4v-2" />
          <Path  d="M20 12h2" />
          <Path  d="M12 20v2" />
        </G>
      </Svg>
    );
  }

