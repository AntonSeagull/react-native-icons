

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCurrency = (props: IconProps) => {

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
          <Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <Path d="M4 4l3 3" />
          <Path d="M20 4l-3 3" />
          <Path d="M4 20l3 -3" />
          <Path d="M20 20l-3 -3" />
        </G>
      </Svg>
    );
  }

