

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandGit = (props: IconProps) => {

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
          <Path  d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path  d="M12 15v-6" />
          <Path  d="M15 11l-2 -2" />
          <Path  d="M11 7l-1.9 -1.9" />
          <Path  d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" />
        </G>
      </Svg>
    );
  }

