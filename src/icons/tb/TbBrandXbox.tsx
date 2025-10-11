

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandXbox = (props: IconProps) => {

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
          <Path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" />
          <Path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" />
        </G>
      </Svg>
    );
  }

