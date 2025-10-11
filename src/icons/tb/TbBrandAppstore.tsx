

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAppstore = (props: IconProps) => {

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
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
          <Path d="M7 14h5m2.9 0h2.1" />
          <Path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
        </G>
      </Svg>
    );
  }

