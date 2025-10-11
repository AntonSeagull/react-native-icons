

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const ImtsBars2 = (props: IconProps) => {

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
          <Path d="M4.5 6h-3c-0.275 0-0.5 0.225-0.5 0.5v9c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-9c0-0.275-0.225-0.5-0.5-0.5zM4.5 15h-3v-4h3v4zM9.5 4h-3c-0.275 0-0.5 0.225-0.5 0.5v11c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-11c0-0.275-0.225-0.5-0.5-0.5zM9.5 15h-3v-5h3v5zM14.5 2h-3c-0.275 0-0.5 0.225-0.5 0.5v13c0 0.275 0.225 0.5 0.5 0.5h3c0.275 0 0.5-0.225 0.5-0.5v-13c0-0.275-0.225-0.5-0.5-0.5zM14.5 15h-3v-6h3v6z" fill="#000000" />
        </G>
      </Svg>
    );
  }

