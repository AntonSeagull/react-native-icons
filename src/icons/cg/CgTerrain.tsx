

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgTerrain = (props: IconProps) => {

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
          <Path d="M8 10L3 18H13L8 10Z" fill="currentColor" />
          <Path d="M10.5286 10.7543L13.5 6L21 18H15.0572L10.5286 10.7543Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

