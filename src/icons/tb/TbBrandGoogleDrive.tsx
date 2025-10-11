

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandGoogleDrive = (props: IconProps) => {

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
          <Path d="M12 10l-6 10l-3 -5l6 -10z" />
          <Path d="M9 15h12l-3 5h-12" />
          <Path d="M15 15l-6 -10h6l6 10z" />
        </G>
      </Svg>
    );
  }

