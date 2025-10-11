

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiGooglePodcastsLogoLight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M134,16V48a6,6,0,0,1-12,0V16a6,6,0,0,1,12,0Zm42,42a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V64A6,6,0,0,0,176,58ZM128,202a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V208A6,6,0,0,0,128,202Zm0-120a6,6,0,0,0-6,6v80a6,6,0,0,0,12,0V88A6,6,0,0,0,128,82ZM80,58a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V64A6,6,0,0,0,80,58Zm96,72a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V136A6,6,0,0,0,176,130ZM32,106a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,32,106Zm48,48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V160A6,6,0,0,0,80,154Zm144-48a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V112A6,6,0,0,0,224,106Z" />
        </G>
      </Svg>
    );
  }

