

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandLoom = (props: IconProps) => {

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
          <Path d="M17.464 6.518a6 6 0 1 0 -3.023 7.965" />
          <Path d="M17.482 17.464a6 6 0 1 0 -7.965 -3.023" />
          <Path d="M6.54 17.482a6 6 0 1 0 3.024 -7.965" />
          <Path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
        </G>
      </Svg>
    );
  }

