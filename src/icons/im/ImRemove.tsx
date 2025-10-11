

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImRemove = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M13 1h-10l-3 3v10.5c0 0.276 0.224 0.5 0.5 0.5h15c0.276 0 0.5-0.224 0.5-0.5v-10.5l-3-3zM10 10v3h-4v-3h-3l5-4 5 4h-3zM2.414 3l1-1h9.171l1 1h-11.171z" fill="#000000" />
        </G>
      </Svg>
    );
  }

