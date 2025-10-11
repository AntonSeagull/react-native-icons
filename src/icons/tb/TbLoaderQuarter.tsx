

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLoaderQuarter = (props: IconProps) => {

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
          <Path d="M12 6l0 -3" />
          <Path d="M6 12l-3 0" />
          <Path d="M7.75 7.75l-2.15 -2.15" />
        </G>
      </Svg>
    );
  }

