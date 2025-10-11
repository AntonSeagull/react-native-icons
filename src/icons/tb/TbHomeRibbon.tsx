

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbHomeRibbon = (props: IconProps) => {

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
          <Path d="M16 15h5v7l-2.5 -1.5l-2.5 1.5z" />
          <Path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h5" />
          <Path d="M9 21v-6a2 2 0 0 1 2 -2h1.5" />
        </G>
      </Svg>
    );
  }

