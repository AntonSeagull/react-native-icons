

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandBlackberry = (props: IconProps) => {

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
          <Path d="M7 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
          <Path d="M6 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
          <Path d="M13 12a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
          <Path d="M14 6a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
          <Path d="M12 18a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
          <Path d="M20 15a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
          <Path d="M21 9a1 1 0 0 0 -1 -1h-2l-.5 2h2.5a1 1 0 0 0 1 -1z" />
        </G>
      </Svg>
    );
  }

