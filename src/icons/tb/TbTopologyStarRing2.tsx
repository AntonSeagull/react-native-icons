

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTopologyStarRing2 = (props: IconProps) => {

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
          <Path d="M14 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M14 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M6 12h4" />
          <Path d="M14 12h4" />
          <Path d="M12 6v4" />
          <Path d="M12 14v4" />
          <Path d="M5.5 10.5l5 -5" />
          <Path d="M13.5 5.5l5 5" />
          <Path d="M18.5 13.5l-5 5" />
          <Path d="M10.5 18.5l-5 -5" />
        </G>
      </Svg>
    );
  }

