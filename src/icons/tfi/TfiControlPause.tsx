

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiControlPause = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M3 15h4v-13h-4v13zM4 3h2v11h-2v-11zM10 2v13h4v-13h-4zM13 14h-2v-11h2v11z" fill="#000000" />
        </G>
      </Svg>
    );
  }

