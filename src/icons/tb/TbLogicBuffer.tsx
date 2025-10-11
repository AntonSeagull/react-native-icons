

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLogicBuffer = (props: IconProps) => {

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
          <Path d="M22 12h-5" />
          <Path d="M2 9h5" />
          <Path d="M2 15h5" />
          <Path d="M7 5l10 7l-10 7z" />
        </G>
      </Svg>
    );
  }

