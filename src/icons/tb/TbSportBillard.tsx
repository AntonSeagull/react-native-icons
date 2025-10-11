

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSportBillard = (props: IconProps) => {

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
          <Path d="M12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M12 12m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
        </G>
      </Svg>
    );
  }

