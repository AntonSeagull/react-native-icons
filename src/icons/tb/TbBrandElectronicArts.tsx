

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandElectronicArts = (props: IconProps) => {

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
          <Path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
          <Path d="M17 14h-2" />
          <Path d="M6.5 12h3.5" />
          <Path d="M8 9h3" />
        </G>
      </Svg>
    );
  }

