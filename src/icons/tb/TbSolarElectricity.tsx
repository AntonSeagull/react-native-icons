

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSolarElectricity = (props: IconProps) => {

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
          <Path d="M4 6.28v11.44a1 1 0 0 0 1.243 .97l6 -1.5a1 1 0 0 0 .757 -.97v-8.44a1 1 0 0 0 -.757 -.97l-6 -1.5a1 1 0 0 0 -1.243 .97z" />
          <Path d="M8 6v12" />
          <Path d="M12 12h-8" />
          <Path d="M20 7l-3 5h4l-3 5" />
        </G>
      </Svg>
    );
  }

