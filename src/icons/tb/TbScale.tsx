

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbScale = (props: IconProps) => {

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
          <Path d="M7 20l10 0" />
          <Path d="M6 6l6 -1l6 1" />
          <Path d="M12 3l0 17" />
          <Path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
          <Path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
        </G>
      </Svg>
    );
  }

