

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFunctionLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M206,40a6,6,0,0,1-6,6H170.71a26,26,0,0,0-25.58,21.35L135.19,122H184a6,6,0,0,1,0,12H133l-10.33,56.8A38,38,0,0,1,85.29,222H56a6,6,0,0,1,0-12H85.29a26,26,0,0,0,25.58-21.35L120.81,134H72a6,6,0,0,1,0-12h51l10.33-56.8A38,38,0,0,1,170.71,34H200A6,6,0,0,1,206,40Z" />
        </G>
      </Svg>
    );
  }

