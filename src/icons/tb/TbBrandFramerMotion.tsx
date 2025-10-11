

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandFramerMotion = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
          <Path d="M20 12l-8 8l-4 -4" />
        </G>
      </Svg>
    );
  }

